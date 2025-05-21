import { NextResponse } from "next/server";
import { BASE_URL, genHeaders } from "@/utils";
import { getLocale } from "next-intl/server";

export interface ResShopListDto {
	/**
	 * 列表
	 */
	records: CreateShopDto[];
	/**
	 * 总条数
	 */
	total: string;
}

/**
 * CreateShopDto
 */
export interface CreateShopDto {
	id: string;
	/**
	 * 门店名称
	 */
	name: string;
	/**
	 * 门店英文名称
	 */
	nameEn: string;
	/**
	 * 区域名称
	 */
	region: string;
	/**
	 * 区域英文名称
	 */
	regionEn: string;
}

export interface ShopsInfoParams {
	regionEn?:
		| "Southwest"
		| "North China"
		| "Northeast"
		| "Northwest"
		| "Central-South"
		| "East China";
	pageSize: string;
	pageNum: string;
}

export async function POST(request: Request) {
	const locale = (await getLocale()) as "en" | "zh";
	// 处理 request payload 类型参数
	const payload = await request.text();
	const params = JSON.parse(payload) as ShopsInfoParams;
	const res = await fetch(`${BASE_URL}/shop/list`, {
		method: "post",
		body: JSON.stringify(params),
		headers: genHeaders(undefined, locale),
	});
	const data = (await res.json()).data;
	return NextResponse.json({ data });
}
