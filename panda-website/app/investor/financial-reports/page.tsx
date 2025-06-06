// TODO: 接口返回;
import type { FinancialReportsInfo } from "@/app/investor/financial-reports/api/route";
import FinancialReportsView from "@/app/investor/financial-reports/view";
import { SSE_URL } from "@/utils";
export default async function FinancialReportsPage() {
	async function getFinancialReportsData() {
		const res = await fetch(`${SSE_URL}/investor/financial-reports/api`, {
			method: "post",
		});
		return await res.json();
	}
	const FinancialReportsRes: { data: FinancialReportsInfo } =
		await getFinancialReportsData();
	return <FinancialReportsView list={FinancialReportsRes.data.list} />;
}
