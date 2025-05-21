import { NextResponse } from "next/server";
import type { AddressItem, ContactInfo } from "@/app/contact/api/route";
import type { ResNewsDto, ResNewsListDto } from "@/app/news/api/route";
import { SSE_URL } from "@/utils";
export interface HomeInfo {
	intro: string;
	headquarter: AddressItem;
	operationCenters: AddressItem[];
	news: Array<ResNewsDto[]>;
}

async function getContactData() {
	const res = await fetch(`${SSE_URL}/contact/api`, {
		method: "post",
	});
	return await res.json();
}

async function getNewsData() {
	const res = await fetch(`${SSE_URL}/news/api`, { method: "post" });
	return await res.json();
}

export async function POST() {
	const contactDataRes: { data: ContactInfo } = await getContactData();
	const newsRes: { data: ResNewsListDto } = await getNewsData();
	const news: Array<ResNewsDto[]> = [];
	for (let i = 0; i < newsRes.data.records.length; i = i + 3) {
		news.push([
			newsRes.data.records[i],
			newsRes.data.records[i + 1],
			newsRes.data.records[i + 2],
		]);
	}
	const data = {
		headquarter: contactDataRes.data.headquarter,
		operationCenters: contactDataRes.data.operationCenters,
		news,
	};
	return NextResponse.json({ data });
}
