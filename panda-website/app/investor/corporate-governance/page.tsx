// TODO: 接口返回;

import type { CorporateGovernanceResInfo } from "@/request";
import CorporateGovernanceView from "@/app/investor/corporate-governance/view";
import { getCorporateGovernance } from "@/request";
export default async function CorporateGovernancePage() {
	const corporateGovernanceRes: { data: CorporateGovernanceResInfo } =
		await getCorporateGovernance();
	return <CorporateGovernanceView data={corporateGovernanceRes.data} />;
}
