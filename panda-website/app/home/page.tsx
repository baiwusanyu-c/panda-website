import HomeView from "@/app/home/view";
import {HomeInfo} from "@/app/home/api/route";

// TODO: 接口返回
export default async function HomePage() {
    async function getHomeData(){
        const res = await fetch('http://localhost:3000/home/api', { method: 'post' });
        return await res.json()
    }
    const homeRes: { data: HomeInfo } = await getHomeData()
    return (
        <HomeView data={homeRes.data} />
    );
}
