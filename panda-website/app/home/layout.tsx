import { PandaFooter } from "@/components/footer";
import {Wave} from "@/components/wave";

// TODO: 获取 Footer 数据
export default async function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full h-full overflow-y-auto'>
      {children}
      <PandaFooter>
        <Wave/>
      </PandaFooter>
    </div>
  )
}
