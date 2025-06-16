import localFont from "next/font/local";
import "./globals.css";
import PandaNav from "@/components/nav";
import { type BasicInfo, getMenusData } from "@/request";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { LoginBtn } from "@/components/login-btn";
import { ToastProvider } from "@heroui/toast";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";

const oppoSans = localFont({
	src: "./fonts/fangzx.ttf",
	variable: "--oppp-sans",
});

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const res: { data: BasicInfo } = await getMenusData();
	const locale = await getLocale();
	return (
		<html lang={locale} style={{ fontSize: "11px" }}>
			<body
				className={`${oppoSans.variable} h-[100vh] w-full overflow-x-hidden bg-cbd-gray-56`}
				style={{ fontFamily: "var(--oppp-sans)" }}
			>
				<NextIntlClientProvider>
					<AntdRegistry>
						<ToastProvider />
						<PandaNav list={res.data.links}></PandaNav>
						{children}
						<LoginBtn />
					</AntdRegistry>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
