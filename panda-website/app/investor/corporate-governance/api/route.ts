import { NextResponse } from "next/server";

export interface CorporateGovernanceResInfo {
	description: string;
	fileList: Array<{
		link: string;
		date?: string;
		title: string;
		subTitle?: string;
	}>;
}
export async function POST() {

	const data = {
		description:
			"我们为消费者，特别是注重茶饮品质的年轻一代，提供各种现制茶饮。我们对产品质量和产品开发的努力使茬白稻成为行业中的头部参与者，拥有广泛的消费群体。",
		fileList: [
			{
				link: "https://docs.github.com/",
				title: "董事名单与其角色和职能",
			},
			{
				link: "https://docs.github.com/",
				title: "薪酬委员会－ 职责和议事规则",
			},
			{
				link: "https://docs.github.com/",
				title: "提名委员会－ 职责和议事规则",
			},
			{
				link: "https://docs.github.com/",
				title: "审计委员会－ 职责和议事规则",
			},
			{
				link: "https://docs.github.com/",
				title: "章程",
			},
			{
				link: "https://docs.github.com/",
				title: "股东通讯政策",
			},
			{
				link: "https://docs.github.com/",
				title: "股东提名人选参选董事的程序",
			},
		],
	};
	return NextResponse.json({ data });
}
