import { PandaFooter } from "@/components/footer";

export default async function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full h-full overflow-y-auto pf left-0 top-0 z-[1]'>
      {children}
      <PandaFooter>
      </PandaFooter>
    </div>
  )
}
