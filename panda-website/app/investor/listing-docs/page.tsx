// TODO: 接口返回;
import ListingDocsView from "@/app/investor/listing-docs/view";
import {ListingDocsInfo} from "@/app/investor/listing-docs/api/route";

export default async function ListingDocsPage() {
  async function getListingDocsData(){
    const res = await fetch('http://localhost:3000/investor/listing-docs/api', { method: 'post' });
    return await res.json()
  }
  const ListingDocsRes: { data: ListingDocsInfo } = await getListingDocsData()
  return (
    <ListingDocsView link={ListingDocsRes.data.link} />
  );
}
