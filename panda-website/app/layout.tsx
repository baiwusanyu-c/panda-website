import localFont from "next/font/local";
import "./globals.css";
import PandaNav  from "@/components/nav";
import type { BasicInfo } from "@/app/api/route";
import { getLocale } from 'next-intl/server';

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
  const locale = await getLocale();
  return (
    <html lang={locale} style={{fontSize: '11px'}}>
      <body className={`${oppoSans.variable} h-[100vh] w-full overflow-x-hidden bg-cbd-gray-56`}  style={{fontFamily: 'var(--oppp-sans)'}}>
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
