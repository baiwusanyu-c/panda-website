import { PandaFooter } from "@/components/footer";
import { TopBlock } from "@/components/top-block";
import { Wave } from "@/components/wave";

export default async function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full h-full overflow-y-auto pf left-0 top-0 z-[1]'>
      <TopBlock/>
      {children}
      <PandaFooter>
        <Wave/>
      </PandaFooter>
    </div>
  )
}
