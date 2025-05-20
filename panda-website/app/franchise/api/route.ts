import { NextResponse } from "next/server";

export interface FranchiseInfo {
	advantage: string[];
	tel: string;
	process: Array<{
		title: string;
		description: string;
	}>;
}
export async function POST() {
	// TODO: 真实的后端地址
	const data = {
		advantage: [
			"规范化店面",
			"专业设计",
			"统一化运作",
			"规范化管理",
			"标准化产品",
			"专业化产品",
		],
		tel: "4000-515-000",
		process: [
			{
				title: "加盟申请",
				description: "线上填写《茬白稻-加盟申请表》，审核结果2个工作日",
			},
			{
				title: "资质审核",
				description: "总部审核客户提交的加盟申请表，预约时间面试，7个工作日",
			},
			{
				title: "签订意向合同",
				description: "通过资质审核，签订意向加盟合同",
			},
			{
				title: "店铺审核",
				description: "总部审核客户提报的商铺，审核时间3-5个工作日",
			},
			{
				title: "签订合同",
				description: "店铺通过审核，签订《加盟合同》",
			},
			{
				title: "店铺装修、人员培训",
				description: "10个工作日内提供装修方案,同时进行为期25天培训",
			},
			{
				title: "设备采购",
				description: "提供完整的设备采购方案，20个工作日",
			},
			{
				title: "装修验收、首批备货",
				description: "店铺验收合格后,采购第一批原材料",
			},
			{
				title: "开业筹备",
				description: "办理双证时给予指导，策划新店开业营销方案",
			},
			{
				title: "后期辅导",
				description: "提供店面管理指导、新品培训等",
			},
		],
	};
	return NextResponse.json({ data });
}
