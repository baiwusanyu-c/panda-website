import localFont from "next/font/local";
import "./globals.css";
import PandaNav from "@/components/nav";
import type { BasicInfo } from "@/app/api/route";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { SSE_URL } from "@/utils";
import { LoginBtn } from "@/components/login-btn";
import { ToastProvider } from "@heroui/toast";

const oppoSans = localFont({
	src: "./fonts/fangzx.ttf",
	variable: "--oppp-sans",
});

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	async function getData() {
		const res = await fetch(`${SSE_URL}/api`, { method: "post" });
		return await res.json();
	}
	const res: { data: BasicInfo } = await getData();
	const locale = await getLocale();
	return (
		<html lang={locale} style={{ fontSize: "11px" }}>
			<body
				className={`${oppoSans.variable} h-[100vh] w-full overflow-x-hidden bg-cbd-gray-56`}
				style={{ fontFamily: "var(--oppp-sans)" }}
			>
				<NextIntlClientProvider>
					<ToastProvider />
					<PandaNav list={res.data.links}></PandaNav>
					{children}
					<LoginBtn />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
