import FranchiseView from "@/app/franchise/view";
import type { ResFranchiseDto } from "@/request";
import { getFranchisePage } from "@/request";
// TODO: 接口返回

export default async function FranchisePage() {
	const franchiseRes: { data: ResFranchiseDto[] } = await getFranchisePage();
	return <FranchiseView info={franchiseRes.data} />;
}
