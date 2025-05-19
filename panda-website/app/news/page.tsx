import NewsView from "@/app/news/view";
import { ResNewsListDto } from "@/app/news/api/route";


export default async function NewsPage() {
    async function getNewsData(){
        const res = await fetch('http://localhost:3000/news/api', { method: 'post' });
        return await res.json()
    }
    const newsRes: { data: ResNewsListDto } = await getNewsData()
    return (
        <NewsView news={newsRes.data.records} />
    );
}
