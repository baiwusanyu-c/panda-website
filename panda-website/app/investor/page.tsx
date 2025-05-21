// TODO: 接口返回;

import type { InvestorResInfo } from "@/app/investor/api/route";
import InvestorView from "@/app/investor/view";
import { SSE_URL } from "@/utils";
export default async function IRHomePage() {
	async function getInvestorResInfoData() {
		const res = await fetch(`${SSE_URL}/investor/api`, {
			method: "post",
		});
		return await res.json();
	}
	const investorResInfoRes: { data: InvestorResInfo } =
		await getInvestorResInfoData();
	return <InvestorView data={investorResInfoRes.data} />;
}
