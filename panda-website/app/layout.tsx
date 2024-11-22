import {AntdRegistry} from '@ant-design/nextjs-registry';
import {ConfigProvider} from "antd";
import "./globals.css";
import PandaNav from "@/components/nav";
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
  const list:{ data: string[] } = await getData()
  return (
    <html lang="ch">
      <body>
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
