// TODO: 接口返回;
import ListingDocsView from "@/app/investor/listing-docs/view";
import type { ListingDocsInfo } from "@/app/investor/listing-docs/api/route";
import { SSE_URL } from "@/utils";
export default async function ListingDocsPage() {
	async function getListingDocsData() {
		const res = await fetch(`${SSE_URL}/investor/listing-docs/api`, {
			method: "post",
		});
		return await res.json();
	}
	const ListingDocsRes: { data: ListingDocsInfo } = await getListingDocsData();
	return <ListingDocsView links={ListingDocsRes.data} />;
}
