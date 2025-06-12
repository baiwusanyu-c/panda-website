// TODO: 接口返回;
import ListingDocsView from "@/app/investor/listing-docs/view";
import type { ListingDocsInfo } from "@/request";
import { getListingDocs } from "@/request";
export default async function ListingDocsPage() {
	const ListingDocsRes: { data: ListingDocsInfo } = await getListingDocs();
	return <ListingDocsView links={ListingDocsRes.data} />;
}
