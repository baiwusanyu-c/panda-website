import localFont from "next/font/local";
import "./globals.css";
import PandaNav  from "@/components/nav";
import type { BasicInfo } from "@/app/api/route";

const oppoSans = localFont({
  src: "./fonts/fangzx.ttf",
  variable: "--oppp-sans",
});

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
    <html lang="ch" style={{fontSize: '11px'}}>
      <body className={`${oppoSans.variable} w-full overflow-x-hidden h-auto bg-cbd-gray-2`}  style={{fontFamily: 'var(--oppp-sans)'}}>
      <PandaNav
        headerTitle={res.data.headerTitle}
        locale={res.data.locale}
        tel={res.data.tel}
        list={res.data.links}>
      </PandaNav>
      {children}
      </body>
    </html>
  );
}
