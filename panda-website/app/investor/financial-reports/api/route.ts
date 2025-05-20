import { NextResponse } from "next/server";

export interface FinancialReportsInfo {
	list: Array<{
		date: string;
		link: string;
		title: string;
	}>;
}
export async function POST() {
	const data = {
		list: [
			{
				date: "2023",
				link: "https://docs.github.com/",
				title: "2023环境、社会及管治报告",
			},
			{
				date: "2024",
				link: "https://docs.github.com/",
				title: "2024年中期报告",
			},
		],
	};
	return NextResponse.json({ data });
}
