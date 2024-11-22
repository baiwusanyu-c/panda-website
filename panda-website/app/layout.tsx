import {AntdRegistry} from '@ant-design/nextjs-registry';
import {ConfigProvider} from "antd";
import localFont from "next/font/local";
import "./globals.css";

const oppoSans = localFont({
  src: "./fonts/fangzx.ttf",
  variable: "--oppp-sans",
});


import PandaNav, { LinkItem } from "@/components/nav";
import {theme} from "@/theme";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  async function getData(){
    const res = await fetch('http://localhost:3000/api', { method: 'post' });
    return await res.json()
  }
  const list:{ data: LinkItem[] } = await getData()
  return (
    <html lang="ch" style={{fontSize: '11px'}}>
      <body className={`${oppoSans.variable} w-full overflow-x-hidden h-auto`}  style={{fontFamily: 'var(--oppp-sans)'}}>
      <AntdRegistry>
        <ConfigProvider theme={theme} componentSize="middle">
          <PandaNav list={list.data}></PandaNav>
          {children}
        </ConfigProvider>
      </AntdRegistry>
      </body>
    </html>
  );
}
