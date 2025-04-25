import { NextResponse } from 'next/server';

export interface AddressItem {
    name: string;
    address: string;
    website?: string;
    supervisionPhone: string;
    email: string;
    networkSecurity: string;
    franchiseHotline: string;
    customerServiceHotline: string;
    reportingMobile: string;
    weChat: string;
}
export interface ContactInfo {
    headquarter: AddressItem
    operationCenters: AddressItem[]
}
export async function POST() {
    const data = {
        headquarter: {
            name: '成都总部',
            address: '成都市武侯区名都路777号嘉尔金融科技中心',
            website: 'www.pandaTea.com',
            supervisionPhone:'(028)65786362',
            email:'baiwusanyu@xxxx.com',
            networkSecurity: 'security@xxxx.com',
            franchiseHotline:'4000-515-32568',
            customerServiceHotline:'4000-287-7401',
            reportingMobile :'1850287xxxx',
            weChat:'黑暗茬白稻'
        },
        operationCenters: [
            {
                name: '四川营运中心',
                address: '成都市武侯区名都路777号嘉尔金融科技中心',
            },
            {
                name: '浙江营运中心',
                address: '杭州市萧山区奥体万科中心B座15楼',
            },
            {
                name: '湖北营运中心',
                address: '武汉市武昌区烟霞路万达尊B座1108',
            },{
                name: '福建营运中心',
                address: '福州市台江区曙光路118号宇洋中央金座23楼',
            },{
                name: '上海营运中心',
                address: '上海市普陀区武宁路501号鸿运大厦4楼',
            },{
                name: '广东营运中心',
                address: '广东省广州市花城大道18号建滔广场26楼',
            },{
                name: '湖南营运中心',
                address: '湖南省长沙市开福区万达广场c3-3308',
            },{
                name: '重庆营运中心',
                address: '重庆市渝中区解放碑平安国际金融中心17楼',
            },{
                name: '河南营运中心',
                address: '郑州市郑东新区金水东路80号2号楼3单元21层',
            },{
                name: '江苏营运中心',
                address: '南京市雨花台区安德门大街34号2号楼311-326室',
            },{
                name: '北京营运中心',
                address: '北京市大兴区西红门兴创国际C座703-707',
            },{
                name: '山东营运中心',
                address: '济南市历下区经十路10690号A栋建邦数字中心5层',
            },{
                name: '江西营运中心',
                address: '江西省南昌市红谷滩新区汉港凯旋22楼',
            },{
                name: '广西营运中心',
                address: '南宁市青秀区民族大道136-1号华润大厦A座2408',
            },{
                name: '安徽营运中心',
                address: '合肥市庐阳区三孝口街道金寨路德必庐州wehome',
            },{
                name: '云南营运中心',
                address: '昆明市盘龙区东风东路建业商业中心A座20楼2011号',
            },{
                name: '陕西营运中心',
                address: '西安市未央区凤城八路西北国金中心E座11楼',
            },
        ]
    }
    return NextResponse.json({ data })
}
