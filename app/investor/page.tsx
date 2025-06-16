// TODO: 接口返回;

import type { InvestorResInfo } from "@/request";
import InvestorView from "@/app/investor/view";
import { getInvestorPage } from "@/request";
export default async function IRHomePage() {
	const investorResInfoRes: { data: InvestorResInfo } = await getInvestorPage();
	return <InvestorView data={investorResInfoRes.data} />;
}
