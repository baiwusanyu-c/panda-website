import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = [
    {
      label: '网站首页',
      value: '/home',
    },
    {
      label: '关于我们',
      value: '/about',
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
    },
    {
      label: '投资者关系',
      value: '/investor',
    },
    {
      label: '联系我们',
      value: '/contact',
    },
  ]
  return NextResponse.json({ data })
}
