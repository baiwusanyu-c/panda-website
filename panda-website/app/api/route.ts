import {NextResponse} from 'next/server';

export interface MenuItem {
  name: string;
  nameEn: string;
  icon?: string;
  path: string;
  parentId?: string;
  children?: MenuItem[];
  id: string;
}

export interface BasicInfo {
  tel: string
  headerTitle: string
  locale: string
  links: MenuItem[]
  products: string[]
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
    links: [],
    tel: '4000-515-000',
    headerTitle: '茬白稻唯一加盟电话',
    locale: 'CN',
    products: [
      '茉莉奶绿',
      '杨枝甘露',
      '西瓜啵啵',
      '超级杯水果茶',
      '招牌芋圆奶茶',
      '芒芒生打椰',
      '青提茉莉',
    ],
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

  const res = await fetch('http://localhost:8084/menu/getTreeMenus', { method: 'post' });
  data.links = (await res.json()).data

  return NextResponse.json({ data })
}
