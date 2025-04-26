import { NextResponse } from 'next/server';
import {AboutInfo} from "@/app/about/api/route";
import {BasicInfo} from "@/app/api/route";
import {AddressItem, ContactInfo} from "@/app/contact/api/route";
import type {NewsInfo} from "@/app/news/api/route";

export interface HomeInfo {
    intro: string
    productList: string[]
    headquarter: AddressItem
    operationCenters: AddressItem[]
    news: Array<NewsInfo["news"]>
    shopContactList: Array<{
        name: string
        link: string
    }>
}

async function getAboutData(){
    const res = await fetch('http://localhost:3000/about/api', { method: 'post' });
    return await res.json()
}

async function getHomeData(){
    const res = await fetch('http://localhost:3000/api', { method: 'post' });
    return await res.json()
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

    const aboutRes: { data: AboutInfo } = await getAboutData()
    const homeRes: { data: BasicInfo } = await getHomeData()
    const contactDataRes: { data: ContactInfo } = await getContactData()
    const newsRes: { data: NewsInfo } = await getNewsData()
    const news:Array<NewsInfo["news"]> = []
    for (let i = 0; i < newsRes.data.news.length; i=i + 3) {
        news.push([
            newsRes.data.news[i],
            newsRes.data.news[i + 1],
            newsRes.data.news[i + 2],
        ])
    }
    const data = {
        intro: aboutRes.data.intro,
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
        productList: homeRes.data.products,
        headquarter: contactDataRes.data.headquarter,
        operationCenters: contactDataRes.data.operationCenters,
        news
    }
    return NextResponse.json({ data })
}
