import { NextResponse } from "next/server";
import { BASE_URL, genHeaders } from "@/utils";

/**
 * ResFranchiseListDto
 */
export interface ResFranchiseListDto {
	/**
	 * 列表
	 */
	records: ResFranchiseDto[];
	/**
	 * 总条数
	 */
	total: string;
}

/**
 * ResFranchiseDto
 */
export interface ResFranchiseDto {
	/**
	 * 创建时间
	 */
	createTime: Date;
	/**
	 * 加盟步骤英文详情
	 */
	detailEn: string;
	/**
	 * 加盟步骤详情
	 */
	detail: string;
	/**
	 * 主键id
	 */
	id: string;
	/**
	 * 顺序
	 */
	order: number;
	/**
	 * 加盟步骤标题
	 */
	title: string;
	/**
	 * 加盟步骤英文标题
	 */
	titleEn: string;
	/**
	 * 更新时间
	 */
	updateTime: string;
}

export async function POST() {
	const res = await fetch(`${BASE_URL}/franchise/process-list`, {
		method: "post",
		body: JSON.stringify({
			pageSize: "100",
			pageNum: "1",
		}),
		headers: genHeaders(),
	});
	const data = (await res.json()).data.records.sort(
		(a: ResFranchiseDto, b: ResFranchiseDto) => {
			return a.order - b.order;
		},
	);
	return NextResponse.json({ data });
}
