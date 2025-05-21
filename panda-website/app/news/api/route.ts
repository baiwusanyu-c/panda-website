import { NextResponse } from "next/server";
import { BASE_URL } from "@/utils/env";
import { genHeaders } from "@/utils";
import { getLocale } from "next-intl/server";

export interface ResNewsDto {
	id: string;
	title: string;
	detail: string;
	titleEn: string;
	detailEn: string;
	link: string;
	date: string;
	createTime: string;
	updateTime: string;
}

export interface ResNewsListDto {
	total: number;
	records: ResNewsDto[];
}

export async function POST() {
	let data: ResNewsListDto = {
		total: 0,
		records: [],
	};
	const locale = (await getLocale()) as "en" | "zh";
	const res = await fetch(`${BASE_URL}/news/list`, {
		method: "post",
		body: JSON.stringify({
			pageSize: "100",
			pageNum: "1",
		}),
		headers: genHeaders(undefined, locale),
	});
	data = (await res.json()).data;
	return NextResponse.json({ data });
}
