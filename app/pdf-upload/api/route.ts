import { NextResponse } from "next/server";
import { BASE_URL, genHeaders } from "@/utils";
import { getLocale } from "next-intl/server";
import { getCookies } from "@/utils/cookies";
/**
 * CreateShopDto
 */
export interface CreateShopDto {
	/**
	 * 文件分类
	 */
	category: "1" | "2" | "3" | "4" | "5" | "6";
	/**
	 * 文件描述
	 */
	description?: null | string;
	/**
	 * 文件英文描述
	 */
	descriptionEn?: null | string;
	/**
	 * 文件名称
	 */
	fileName: string;
	/**
	 * 文件英文名称
	 */
	fileNameEn: string;
}

export async function POST(request: Request) {
	const locale = (await getLocale()) as "en" | "zh";
	// 处理 request payload 类型参数
	const payload = await request.text();
	const params = JSON.parse(payload) as CreateShopDto;
	const res = await fetch(`${BASE_URL}/upload/pdf`, {
		method: "post",
		body: JSON.stringify(params),
		headers: genHeaders(
			{
				token: (await getCookies("panda_tea_token")) || "",
			},
			locale,
		),
	});
	const data = await res.json();
	return NextResponse.json({ data });
}
