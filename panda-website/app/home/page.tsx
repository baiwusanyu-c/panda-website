/*
import HomeView from "@/app/home/view";
import {HomeInfo} from "@/app/home/api/route";

// TODO: 接口返回
export default async function HomePage() {
    async function getHomeData(){
        const res = await fetch('http://localhost:3000/home/api', { method: 'post' });
        const data = await res.json()
        return data
    }
    const homeRes: { data: HomeInfo } = await getHomeData()
    return (
        <HomeView data={homeRes.data} />
    );
}
*/

import {useLocale, useTranslations} from 'next-intl';
export default function HomePage() {
    const t = useTranslations('HomePage');
    const lang = useLocale();
    return <h1>{t('title')} {lang}</h1>;
}
