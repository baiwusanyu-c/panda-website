import { NextResponse } from 'next/server';

export interface AnnouncementsNoticesResInfo {
  records: Array<{
    link: string;
    date?: string,
    title: string
    subTitle?: string
  }>
}
export async function POST() {
  const data = {
    records: [
      {
        link: "https://docs.github.com/",
        title: '月报表',
        subTitle: '截至二零二五年三月三十一日止月份之股份发行人的证券变动月报表',
        date: '2024-04-15',
      },
      {
        link: "https://docs.github.com/",
        title: '公共与通函',
        subTitle: '截至二零二四年十二月三十一日止年度之末期股息',
        date: '2024-04-15',
      },
      {
        link: "https://docs.github.com/",
        subTitle: '截至2024年12月31日止年度之年度业绩公告',
        title: '月报表',
        date: '2024-04-15',
      },
      {
        link: "https://docs.github.com/",
        subTitle: '董事会会议召开日期',
        title: '公共与通函',
        date: '2024-04-15',
      },
      {
        link: "https://docs.github.com/",
        subTitle: '盈利警告',
        title: '公共与通函',
        date: '2024-04-15',
      },
      {
        link: "https://docs.github.com/",
        subTitle: '截至二零二五年二月二十八日止月份之股份发行人的证券变动月报表',
        date: '2024-04-15',
        title: '公共与通函',
      },
    ],
  }
  return NextResponse.json({ data })
}
