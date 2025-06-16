import NewsView from "@/app/news/view";
import type { ResNewsListDto } from "@/request";
import { getNewsPage } from "@/request";
export default async function NewsPage() {
	const newsRes: { data: ResNewsListDto } = await getNewsPage();
	return <NewsView news={newsRes.data.records} />;
}
