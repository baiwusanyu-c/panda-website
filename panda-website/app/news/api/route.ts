import { NextResponse } from 'next/server';

export interface NewsInfoIer {
    date: string;
    title: string;
   detail: string;
    link: string;
    id: string;
}

export interface NewsInfo {
    news: Array<NewsInfoIer>
}
export async function POST() {
    const data = {
        news: [
            {
                id: '1545595932625624',
                link: 'https://github.com/baiwusanyu-c',
                date: '2023-08-04',
                title: '茬白稻捐赠1000万元支援北京、河北抗汛救灾工作',
               detail: '8月3日，茬白稻宣布，向北京市慈善协会、河北省慈善总会各捐赠500万元，用于北京房山、门头沟及河北涿州等地的应急救援、物资采购和灾后重建工作。'
            },
            {
                id: '15455959326256245',
                link: 'https://github.com/baiwusanyu-c',
                date: '2023-08-04',
                title: '茬白稻捐赠1000万元支援北京、河北抗汛救灾工作',
               detail: '8月3日，茬白稻宣布，向北京市慈善协会、河北省慈善总会各捐赠500万元，用于北京房山、门头沟及河北涿州等地的应急救援、物资采购和灾后重建工作。'
            },
            {
                id: '15455959326257245',
                link: 'https://github.com/baiwusanyu-c',
                date: '2023-08-04',
                title: '茬白稻捐赠1000万元支援北京、河北抗汛救灾工作',
               detail: '8月3日，茬白稻宣布，向北京市慈善协会、河北省慈善总会各捐赠500万元，用于北京房山、门头沟及河北涿州等地的应急救援、物资采购和灾后重建工作。'
            },
            {
                id: '154553959326256245',
                link: 'https://github.com/baiwusanyu-c',
                date: '2023-08-04',
                title: '茬白稻捐赠1000万元支援北京、河北抗汛救灾工作',
               detail: '8月3日，茬白稻宣布，向北京市慈善协会、河北省慈善总会各捐赠500万元，用于北京房山、门头沟及河北涿州等地的应急救援、物资采购和灾后重建工作。'
            },
            {
                id: '154552959326256245',
                link: 'https://github.com/baiwusanyu-c',
                date: '2023-08-04',
                title: '茬白稻捐赠1000万元支援北京、河北抗汛救灾工作',
               detail: '8月3日，茬白稻宣布，向北京市慈善协会、河北省慈善总会各捐赠500万元，用于北京房山、门头沟及河北涿州等地的应急救援、物资采购和灾后重建工作。'
            },
            {
                id: '154559598326256245',
                link: 'https://github.com/baiwusanyu-c',
                date: '2023-08-04',
                title: '茬白稻捐赠1000万元支援北京、河北抗汛救灾工作',
               detail: '8月3日，茬白稻宣布，向北京市慈善协会、河北省慈善总会各捐赠500万元，用于北京房山、门头沟及河北涿州等地的应急救援、物资采购和灾后重建工作。'
            },
            {
                id: '154559593262562945',
                link: 'https://github.com/baiwusanyu-c',
                date: '2023-08-04',
                title: '茬白稻捐赠1000万元支援北京、河北抗汛救灾工作',
               detail: '8月3日，茬白稻宣布，向北京市慈善协会、河北省慈善总会各捐赠500万元，用于北京房山、门头沟及河北涿州等地的应急救援、物资采购和灾后重建工作。'
            },
            {
                id: '1545595933326256245',
                link: 'https://github.com/baiwusanyu-c',
                date: '2023-08-04',
                title: '茬白稻捐赠1000万元支援北京、河北抗汛救灾工作',
               detail: '8月3日，茬白稻宣布，向北京市慈善协会、河北省慈善总会各捐赠500万元，用于北京房山、门头沟及河北涿州等地的应急救援、物资采购和灾后重建工作。'
            },
        ]
    }
    return NextResponse.json({ data })
}
