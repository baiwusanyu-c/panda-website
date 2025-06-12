"use client";
import { Form, Input, Button, Select, Upload } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { InboxOutlined } from "@ant-design/icons";
import { SSE_URL } from "@/utils";
import { notification } from "antd";
// biome-ignore lint/style/useImportType: <explanation>
import { RcFile } from "antd/es/upload/interface";
import { useTranslations } from "next-intl";
type FieldType = {
	fileName: string;
	fileNameEn: string;
	description?: string;
	descriptionEn?: string;
	category: "1" | "2" | "3" | "4" | "5" | "6" | "7";
	fileList: {
		file: RcFile;
	};
};

export default function PdfUpload() {
	const [api, contextHolder] = notification.useNotification();
	const t = useTranslations("login");
	const { Dragger } = Upload;
	const uploadProps = {
		fileList: [],
		name: "fileList",
		multiple: false,
	};
	const [form] = Form.useForm();
	function beforeUpload(file: RcFile) {
		form.setFieldValue("fileName", file.name);
		return false;
	}
	function onFinish() {
		form.validateFields().then(async (values: FieldType) => {
			const res = await fetch(`${SSE_URL}/pdf-upload/api`, {
				method: "post",
				body: JSON.stringify(values),
			});
			const uploadUrlRes = (await res.json()).data;
			const file = values.fileList.file;
			if (uploadUrlRes.code === 200) {
				const res = await fetch(uploadUrlRes.data.uploadUrl, {
					method: "PUT",
					body: file,
				});
				if (res.status === 200) {
					form.resetFields();
					api.success({
						message: t("info"),
						description: "上传成功",
					});
				}
			}
		});
	}
	return (
		<div className="h-[800px] fcc">
			{contextHolder}
			<Form
				form={form}
				name="basic"
				className="w-[500px]"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				autoComplete="off"
			>
				<Form.Item<FieldType>
					label="上传文件"
					name="fileList"
					rules={[{ required: true, message: "上传文件不能为空" }]}
				>
					<Dragger beforeUpload={beforeUpload} action="" {...uploadProps}>
						<p className="ant-upload-drag-icon">
							<InboxOutlined />
						</p>
					</Dragger>
				</Form.Item>

				<Form.Item<FieldType>
					label="文件名"
					name="fileName"
					rules={[{ required: true, message: "文件名不能为空" }]}
				>
					<Input />
				</Form.Item>

				<Form.Item<FieldType>
					label="文件名英文"
					name="fileNameEn"
					rules={[{ required: true, message: "文件名英文不能为空" }]}
				>
					<Input />
				</Form.Item>

				<Form.Item<FieldType> label="文件描述" name="description">
					<Input.TextArea />
				</Form.Item>

				<Form.Item<FieldType> label="文件描述英文" name="descriptionEn">
					<Input.TextArea />
				</Form.Item>

				<Form.Item<FieldType>
					label="文件类型"
					name="category"
					rules={[{ required: true, message: "请选择文件类型" }]}
				>
					<Select
						options={[
							{ value: "1", label: "公共与通告" },
							{ value: "2", label: "月报表" },
							{ value: "3", label: "通函" },
							{ value: "4", label: "委任代表表格" },
							{ value: "5", label: "业绩报告" },
							{ value: "6", label: "其他" },
							{ value: "7", label: "招股文件" },
						]}
					></Select>
				</Form.Item>

				<Form.Item label={null}>
					<Button type="primary" onClick={onFinish}>
						提交
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}
