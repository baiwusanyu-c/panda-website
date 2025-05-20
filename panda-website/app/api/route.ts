import { NextResponse } from "next/server";
import { BASE_URL } from "@/utils/env";

export interface MenuItem {
	name: string;
	nameEn: string;
	icon?: string;
	path: string;
	parentId?: string;
	children?: MenuItem[];
	id: string;
}

export interface BasicInfo {
	links: MenuItem[];
}
export async function POST() {
	const data = {
		links: [],
	};

	const res = await fetch(`${BASE_URL}/menu/getTreeMenus`, { method: "post" });
	data.links = (await res.json()).data;

	return NextResponse.json({ data });
}
