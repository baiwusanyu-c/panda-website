import { PandaFooter } from "@/components/footer";
import {Wave} from "@/components/wave";
import {TopBlock} from "@/components/top-block";

export default async function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full h-full overflow-y-auto pf left-0 top-0 z-[1]'>
      <TopBlock type={3} isAnimated={false}/>
      {children}
      <PandaFooter>
        <Wave className='bg-cbd-gray-1'/>
      </PandaFooter>
    </div>
  )
}
