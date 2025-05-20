import HomeView from "@/app/home/view";
import type { HomeInfo } from "@/app/home/api/route";

// TODO: 接口返回
export default async function HomePage() {
	async function getHomeData() {
		const res = await fetch("http://localhost:3000/home/api", {
			method: "post",
		});
		const data = await res.json();
		return data;
	}
	const homeRes: { data: HomeInfo } = await getHomeData();
	return <HomeView data={homeRes.data} />;
}
