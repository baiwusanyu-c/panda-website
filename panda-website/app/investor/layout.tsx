import { PandaFooter } from "@/components/footer";
import { TopBlock } from "@/components/top-block";
import { Wave } from "@/components/wave";
import type {BasicInfo} from "@/app/api/route";

// TODO: 投关首页 ir-home
// TODO: 招股文件 Listing Documents
// TODO: 业绩报告 Financial Reports
// TODO: 公告及通函 Announcements & Notices
// TODO: 企业管治 Corporate Governance


// TODO: 获取 Footer 数据
export default async function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  async function getData(){
    const res = await fetch('http://localhost:3000/api', { method: 'post' });
    return await res.json()
  }
  const res: { data: BasicInfo } = await getData()
  return (
    <div className='w-full h-full overflow-y-auto pf left-0 top-0 z-[1]'>
      <TopBlock/>
      {children}
      <PandaFooter data={res.data}>
        <Wave/>
      </PandaFooter>
    </div>
  )
}
