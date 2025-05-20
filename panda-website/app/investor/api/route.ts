import { NextResponse } from "next/server";
import type { CorporateGovernanceResInfo } from "@/app/investor/corporate-governance/api/route";
import type { ListingDocsInfo } from "@/app/investor/listing-docs/api/route";
import type { AnnouncementsNoticesResInfo } from "@/app/investor/announcements-notices/api/route";

export interface InvestorResInfo {
	description: string;
	listingDocsList: ListingDocsInfo;
	corporateGovernance: CorporateGovernanceResInfo;
	announcementsNotices: AnnouncementsNoticesResInfo;
}

async function getListingDocsData() {
	const res = await fetch("http://localhost:3000/investor/listing-docs/api", {
		method: "post",
	});
	return await res.json();
}

async function getCorporateGovernanceData() {
	const res = await fetch(
		"http://localhost:3000/investor/corporate-governance/api",
		{ method: "post" },
	);
	return await res.json();
}

async function getAnnouncementsNoticesData() {
	const res = await fetch(
		"http://localhost:3000/investor/announcements-notices/api",
		{ method: "post" },
	);
	return await res.json();
}

export async function POST() {
	const listingDocsRes: { data: ListingDocsInfo } = await getListingDocsData();
	const corporateGovernanceRes: { data: CorporateGovernanceResInfo } =
		await getCorporateGovernanceData();
	const announcementsNoticesRes: { data: AnnouncementsNoticesResInfo } =
		await getAnnouncementsNoticesData();
	const data = {
		description:
			"自成立以来，茬白稻专注探索天然食材与中式茶饮的搭配，持续研发多元化茶饮产品，致力于提升消费者体验。我们通过互惠互利的加盟模式，现已经发展成为全国知名的现制茶饮企业。",
		listingDocsList: listingDocsRes.data,
		corporateGovernance: corporateGovernanceRes.data,
		announcementsNotices: announcementsNoticesRes.data,
	} as InvestorResInfo;

	return NextResponse.json({ data });
}
