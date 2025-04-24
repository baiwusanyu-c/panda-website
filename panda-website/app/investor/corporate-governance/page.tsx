// TODO: 接口返回;

import {CorporateGovernanceResInfo} from "@/app/investor/corporate-governance/api/route";
import CorporateGovernanceView from "@/app/investor/corporate-governance/view";

export default async function CorporateGovernancePage() {
  async function getCorporateGovernanceData(){
    const res = await fetch('http://localhost:3000/investor/corporate-governance/api', { method: 'post' });
    return await res.json()
  }
  const corporateGovernanceRes: { data: CorporateGovernanceResInfo } = await getCorporateGovernanceData()
  return (
    <CorporateGovernanceView data={corporateGovernanceRes.data} />
  );
}
