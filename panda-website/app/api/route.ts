import { NextResponse } from 'next/server';
import { LinkItem } from "@/components/nav";

export interface BasicInfo {
  tel: string
  headerTitle: string
  locale: string
  links: LinkItem[]
}
export async function POST() {
  const data = {
    links: [
      {
        label: '网站首页',
        value: '/home',
      },
      {
        label: '关于我们',
        value: '/about',
        children: [
          {
            label: '形象展示',
            value: '/about#1',
          },
          {
            label: '品牌介绍',
            value: '/about#2',
          },
          {
            label: '荣誉篇章',
            value: '/about#3',
          },
        ]
      },
      {
        label: '产品展示',
        value: '/product',
      },
      {
        label: '新闻动态',
        value: '/news',
      },
      {
        label: '门店分布',
        value: '/shop',
      },
      {
        label: '招商加盟',
        value: '/franchise',
        children: [
          {
            label: '加盟优势',
            value: '/franchise#1',
          },
          {
            label: '加盟流程',
            value: '/franchise#2',
          },
          {
            label: '投资费用',
            value: '/franchise#3',
          },
          {
            label: '加盟申请',
            value: '/franchise#4',
          },
        ]
      },
      {
        label: '投资者关系',
        value: '/investor',
        children: [
          {
            label: '投关首页',
            value: '/investor#1',
          },
          {
            label: '招股文件',
            value: '/investor#2',
          },
          {
            label: '业绩报告',
            value: '/investor#3',
          },
          {
            label: '公告及通函',
            value: '/investor#4',
          },
          {
            label: '企业管治',
            value: '/investor#5',
          },
          {
            label: '投资者关系联络',
            value: '/investor#6',
          },
        ]
      },
      {
        label: '联系我们',
        value: '/contact',
      },
    ],
    tel: '4000-515-000',
    headerTitle: '茬白稻唯一加盟电话',
    locale: 'CN',
  }
  return NextResponse.json({ data })
}
