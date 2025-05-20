// TODO: 接口返回;

import type { InvestorResInfo } from "@/app/investor/api/route";
import InvestorView from "@/app/investor/view";

export default async function IRHomePage() {
	async function getInvestorResInfoData() {
		const res = await fetch("http://localhost:3000/investor/api", {
			method: "post",
		});
		return await res.json();
	}
	const investorResInfoRes: { data: InvestorResInfo } =
		await getInvestorResInfoData();
	return <InvestorView data={investorResInfoRes.data} />;
}
