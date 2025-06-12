import HomeView from "@/app/home/view";
import type { HomeInfo } from "@/request";
import { getHomePage } from "@/request";
// TODO: 接口返回
export default async function HomePage() {
	const homeRes: { data: HomeInfo } = await getHomePage();
	return <HomeView data={homeRes.data} />;
}
