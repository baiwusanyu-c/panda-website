import { PandaFooter } from "@/components/footer";
import {Wave} from "@/components/wave";
import type {BasicInfo} from "@/app/api/route";
import {TopBlock} from "@/components/top-block";

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
      <TopBlock type={3} isAnimated={false}/>
      {children}
      <PandaFooter data={res.data}>
        <Wave className='bg-cbd-gray-1'/>
      </PandaFooter>
    </div>
  )
}
