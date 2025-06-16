// TODO: 接口返回;
import type { FinancialReportsInfo } from "@/request";
import FinancialReportsView from "@/app/investor/financial-reports/view";
import { getFinancialReports } from "@/request";
export default async function FinancialReportsPage() {
	const FinancialReportsRes: { data: FinancialReportsInfo } =
		await getFinancialReports();
	return <FinancialReportsView list={FinancialReportsRes.data.list} />;
}
