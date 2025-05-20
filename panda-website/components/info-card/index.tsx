import type { ResNewsDto } from "@/app/news/api/route";
import { HistoryOutlined } from "@ant-design/icons";
import { useLocale } from "next-intl";
import dayjs from "dayjs";
interface InfoCardProps {
	info: ResNewsDto;
	className?: string;
}
export function InfoCard(props: InfoCardProps) {
	const { info, className = "bg-cbd-gray-1" } = props;
	const lang = useLocale();
	return (
		<div
			style={{
				transition: "all 0.3s ease",
			}}
			className={`${className} p-[30px] box-border rounded-none rounded-tr-[50px] hover:shadow-xl`}
		>
			<a target="_blank" href={info.link} rel="noreferrer">
				<div className="text-[22px] font-bold text-cbd-gray-7 text-ellipsis overflow-hidden whitespace-nowrap">
					{lang === "zh" ? info.title : info.titleEn}
				</div>
				<div className="text-[16px] text-cbd-gray-7 text-ellipsis overflow-hidden whitespace-nowrap leading-[60px]">
					{lang === "zh" ? info.detail : info.detailEn}
				</div>
				<div className="text-[14px] text-cbd-brand-5 leading-[15px] mt-[20px]">
					<HistoryOutlined className="mr-[12px]" />
					{dayjs(info.date).format(lang === "zh" ? "YYYY-MM-DD" : "MM/DD/YYYY")}
				</div>
			</a>
		</div>
	);
}
