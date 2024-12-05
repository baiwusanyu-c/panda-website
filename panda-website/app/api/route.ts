import { NextResponse } from 'next/server';
import { LinkItem } from "@/components/nav";

export interface BasicInfo {
  tel: string
  headerTitle: string
  locale: string
  links: LinkItem[]
  footerInfo: {
    name: string
    beian: {
      no: string
      url: string
    },
    addr: string
    visits: string
    website: string
    franchiseHotline: string
    customerServiceHotline: string
    support: {
      name: string
      url: string
    },

  }
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
    footerInfo: {
      name: '四川蜀蜀蜀蜀企业管理咨询有限公司',
      beian: {
        no: '蜀ICP备20210114514号',
        url: 'https://beian.miit.gov.cn/#/Integrated/index'
      },
      addr: '成都市武侯区名都路777号嘉尔金融科技中心',
      visits: '114514',
      website: 'www.pandaTea.com',
      franchiseHotline: '4000-515-3258',
      customerServiceHotline: '4000-287-7401',
      support: {
        name: '爱坤科技',
        url: 'https://github.com/baiwusanyu-c'
      },

    }
  }
  return NextResponse.json({ data })
}
