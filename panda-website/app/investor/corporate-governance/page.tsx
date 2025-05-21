// TODO: 接口返回;

import type { CorporateGovernanceResInfo } from "@/app/investor/corporate-governance/api/route";
import CorporateGovernanceView from "@/app/investor/corporate-governance/view";
import { SSE_URL } from "@/utils";
export default async function CorporateGovernancePage() {
	async function getCorporateGovernanceData() {
		const res = await fetch(`${SSE_URL}/investor/corporate-governance/api`, {
			method: "post",
		});
		return await res.json();
	}
	const corporateGovernanceRes: { data: CorporateGovernanceResInfo } =
		await getCorporateGovernanceData();
	return <CorporateGovernanceView data={corporateGovernanceRes.data} />;
}
