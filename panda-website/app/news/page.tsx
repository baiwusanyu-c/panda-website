import NewsView from "@/app/news/view";
import type { NewsInfo } from "@/app/news/api/route";

// TODO: 接口返回
export default async function NewsPage() {
    async function getNewsData(){
        const res = await fetch('http://localhost:3000/news/api', { method: 'post' });
        return await res.json()
    }
    const newsRes: { data: NewsInfo } = await getNewsData()
    return (
        <NewsView news={newsRes.data.news} />
    );
}
