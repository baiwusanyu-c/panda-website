import { NextResponse } from "next/server";
import { BASE_URL, genHeaders } from "@/utils";

export interface AddressItem {
	id: string;
	name: string;
	nameEn: string;
	address: string;
	addressEn: string;
	type: 1 | 2;
	website?: string;
	supervisionPhone: string;
	email: string;
	networkSecurity: string;
	franchiseHotline: string;
	customerServiceHotline: string;
	reportingMobile: string;
	weChat: string;
}
export interface ContactInfo {
	headquarter: AddressItem;
	operationCenters: AddressItem[];
}
export async function POST() {
	const headquarterRes = await fetch(`${BASE_URL}/operation-center/list`, {
		method: "post",
		body: JSON.stringify({
			pageSize: "100",
			pageNum: "1",
			type: "1",
		}),
		headers: genHeaders(),
	});
	const headquarter = (await headquarterRes.json()).data.records[0] || {};

	const res = await fetch(`${BASE_URL}/operation-center/list`, {
		method: "post",
		body: JSON.stringify({
			pageSize: "100",
			pageNum: "1",
			type: "2",
		}),
		headers: genHeaders(),
	});
	const operationCenters = (await res.json()).data.records;

	const data = {
		headquarter,
		operationCenters,
	};
	return NextResponse.json({ data });
}
