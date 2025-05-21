import NewsView from "@/app/news/view";
import type { ResNewsListDto } from "@/app/news/api/route";
import { SSE_URL } from "@/utils";
export default async function NewsPage() {
	async function getNewsData() {
		const res = await fetch(`${SSE_URL}/news/api`, {
			method: "post",
		});
		return await res.json();
	}
	const newsRes: { data: ResNewsListDto } = await getNewsData();
	return <NewsView news={newsRes.data.records} />;
}
