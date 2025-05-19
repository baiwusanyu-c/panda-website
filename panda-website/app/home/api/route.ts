import { NextResponse } from 'next/server';
import { AddressItem, ContactInfo } from "@/app/contact/api/route";
import { ResNewsDto, ResNewsListDto} from "@/app/news/api/route";

export interface HomeInfo {
    intro: string
    headquarter: AddressItem
    operationCenters: AddressItem[]
    news: Array<ResNewsDto[]>
    shopContactList: Array<{
        name: string
        link: string
    }>
}

async function getContactData(){
    const res = await fetch('http://localhost:3000/contact/api', { method: 'post' });
    return await res.json()
}

async function getNewsData(){
    const res = await fetch('http://localhost:3000/news/api', { method: 'post' });
    return await res.json()
}

export async function POST() {
    const contactDataRes: { data: ContactInfo } = await getContactData()
    const newsRes: { data: ResNewsListDto } = await getNewsData()
    const news:Array<ResNewsDto[]> = []
    for (let i = 0; i < newsRes.data.records.length; i=i + 3) {
        news.push([
            newsRes.data.records[i],
            newsRes.data.records[i + 1],
            newsRes.data.records[i + 2],
        ])
    }
    const data = {
        shopContactList: [
            {
                name: '微信公众号',
                link: '/home'
            },
            {
                name: '微博',
                link: '/home'
            },
            {
                name: '抖音',
                link: '/home'
            },
            {
                name: '小红书',
                link: '/home'
            },
            {
                name: 'B站',
                link: '/home'
            }
        ],
        headquarter: contactDataRes.data.headquarter,
        operationCenters: contactDataRes.data.operationCenters,
        news
    }
    return NextResponse.json({ data })
}
