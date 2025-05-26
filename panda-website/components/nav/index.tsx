"use client";
import Link from "next/link";
import Image from "next/image";
import { PhoneFilled, GlobalOutlined } from "@ant-design/icons";
import { NavItem } from "@/components/nav/NavItem";
import { startTransition, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { MenuItem } from "@/app/api/route";
import { useLocale, useTranslations } from "next-intl";
import { type Locale, setUserLocale } from "@/locale/locale-cookie";
import { motion, AnimatePresence } from "motion/react";

export interface PandaNavProps {
	list: MenuItem[];
}

export default function PandaNav(props: PandaNavProps) {
	const { list } = props;
	const t = useTranslations("common");
	const [linkList, setLinkList] = useState<MenuItem[]>(list);
	const [width, setWidth] = useState(globalThis.innerWidth);

	const handleResize = (init = false) => {
		const browserWidth = globalThis.innerWidth;
		const isSmaller = browserWidth <= width;
		setWidth(browserWidth);
		const updatedLinks = JSON.parse(JSON.stringify(props.list));
		const curLinks = JSON.parse(JSON.stringify(linkList));
		const curLength = curLinks.length;

		const addMoreMenu = (count: number) => {
			const removedLinks = updatedLinks.splice(
				updatedLinks.length - count,
				count,
			);
			updatedLinks.push({
				id: "more-page",
				name: "更多",
				nameEn: "more",
				path: "/more-page",
				show:true,
				children: removedLinks,
			});
		};

		if (init) {
			if (browserWidth <= 1500 && browserWidth > 1420) {
				addMoreMenu(2);
				setLinkList([...updatedLinks]);
			} else if (browserWidth <= 1420 && browserWidth > 1280) {
				addMoreMenu(3);
				setLinkList([...updatedLinks]);
			} else if (browserWidth <= 1280 && browserWidth > 1100) {
				addMoreMenu(4);
				setLinkList([...updatedLinks]);
			} else if (browserWidth <= 1100 && browserWidth > 960) {
				addMoreMenu(5);
				setLinkList([...updatedLinks]);
			}
			return;
		}
		if (isSmaller) {
			if (browserWidth <= 1500 && browserWidth > 1420 && curLength === 8) {
				addMoreMenu(2);
				setLinkList([...updatedLinks]);
			} else if (
				browserWidth <= 1420 &&
				browserWidth > 1280 &&
				curLength === 7
			) {
				addMoreMenu(3);
				setLinkList([...updatedLinks]);
			} else if (
				browserWidth <= 1280 &&
				browserWidth > 1100 &&
				curLength === 6
			) {
				addMoreMenu(4);
				setLinkList([...updatedLinks]);
			} else if (
				browserWidth <= 1100 &&
				browserWidth > 960 &&
				curLength === 5
			) {
				addMoreMenu(5);
				setLinkList([...updatedLinks]);
			}
		} else {
			if (browserWidth < 1500 && browserWidth >= 1420 && curLength === 6) {
				addMoreMenu(2);
				setLinkList([...updatedLinks]);
			} else if (
				browserWidth < 1420 &&
				browserWidth >= 1280 &&
				curLength === 5
			) {
				addMoreMenu(3);
				setLinkList([...updatedLinks]);
			} else if (
				browserWidth < 1280 &&
				browserWidth >= 1100 &&
				curLength === 4
			) {
				addMoreMenu(4);
				setLinkList([...updatedLinks]);
			} else if (browserWidth >= 1500) {
				setLinkList([...updatedLinks]);
			}
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies(linkList): <explanation>
	// biome-ignore lint/correctness/useExhaustiveDependencies(width): <explanation>
	// biome-ignore lint/correctness/useExhaustiveDependencies(handleResize): <explanation>
	useEffect(() => {
		// 监听窗口大小变化
		const resizeListener = () => handleResize();
		globalThis.addEventListener("resize", resizeListener);

		return () => {
			globalThis.removeEventListener("resize", resizeListener);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [linkList, width]);

	// biome-ignore lint/correctness/useExhaustiveDependencies(handleResize): <explanation>
	useEffect(() => {
		handleResize(true);
	}, []);

	const pathname = usePathname();
	const isActiveCls = useMemo(() => {
		return (url: string) => {
			const basic =
				"w-auto h-full block text-[16px] text-cbd-brand-5 hover:font-bold overflow-hidden transition-all duration-[0.4s] py-0 px-[18px] leading-[85px]";
			if (pathname.includes(url)) {
				return `${basic} !font-bold`;
			}
			return basic;
		};
	}, [pathname]);

	const lang = useLocale();
	const changeLocale = (v: Locale) => {
		startTransition(() => {
			setUserLocale(v);
		});
	};

	const [showLocale, setShowLocale] = useState(false);
	const linkRef = useRef<HTMLDivElement | null>(null);
	const [pos, setPos] = useState<{
		left: string;
		top: string;
	}>();
	function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
		e.stopPropagation();
		setShowLocale(true);
		handleSubMouseEnter();
		setTimeout(() => {
			if (linkRef.current) {
				const rect = (e.target as HTMLDivElement).getBoundingClientRect();
				const subLinkRect = (
					linkRef.current as HTMLDivElement
				).getBoundingClientRect();
				setPos({
					top: `${rect.top + 27 + rect.height}px`,
					left: `${rect.left - subLinkRect.width}px`,
				});
			}
		}, 100);
	}

	function handleMouseLeave() {
		setShowLocale(false);
	}

	function handleSubMouseEnter() {
		setShowLocale(true);
	}
	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			key="fade-in-nav-header"
			transition={{ duration: 0.3, ease: "easeInOut" }}
			className="h-[85px] max-w-[1500px] min-w-[960px] chapanda-tea-nav bg-cbd-white rounded-full fbc pf left-0 right-0 top-[15px] my-0 mx-auto pl-[10px] z-[6]"
		>
			{/* logo */}
			<div className="h-full fcc mx-[20px] w-[300px]">
				<Image
					src="/logo.png"
					alt="panda tea logo"
					width={300}
					height={44}
					priority
				/>
			</div>
			<div className="h-full w-auto fcc">
				{(linkList || []).filter((u) => u.show).map((url) => (
					<NavItem links={url.children} key={url.id} url={url.path}>
						<Link
							onClick={(e) => {
								if (url.path === "/more-page") {
									e.preventDefault();
								}
							}}
							className={isActiveCls(url.path)}
							href={url.path}
						>
							{lang === "en" ? url.nameEn : url.name}
						</Link>
					</NavItem>
				))}
			</div>
			{/* i18n */}
			<div
				className="h-full w-[280px] fcc bg-cbd-brand-5 rounded-tr-full rounded-br-full"
				style={{ fontFamily: "var(--oppp-sans)" }}
			>
				<div className="bg-cbd-white rounded-full fcc h-[30px] w-[30px] ml-[16px]">
					<PhoneFilled
						rotate={90}
						style={{ fontSize: "16px" }}
						className="!text-cbd-brand-5"
					/>
				</div>
				<ul className="text-cbd-white text-[16px] mx-[10px]">
					{t("headerTitle")}
					<br />
					<span className="text-cbd-white text-[19px] font-bold">
						{" "}
						{t("tel")}
					</span>
				</ul>
				<div
					className="fcc h-[30px] mr-[16px]"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<GlobalOutlined
						style={{ fontSize: "20px" }}
						className="!text-cbd-white"
					/>
					<span className="text-cbd-white text-[16px] ml-[6px]">
						{" "}
						{lang === "en" ? "EN" : "CN"}
					</span>
				</div>
				<AnimatePresence>
					{showLocale ? (
						<motion.div
							initial={{
								opacity: 0,
								borderBottomRightRadius: "4px",
								borderBottomLeftRadius: "4px",
							}}
							animate={{
								opacity: 1,
								borderBottomRightRadius: "100px",
								borderBottomLeftRadius: "100px",
							}}
							exit={{
								opacity: 0,
								borderBottomRightRadius: "4px",
								borderBottomLeftRadius: "4px",
							}}
							key={showLocale ? "fade-in-link" : "fade-out-link"}
							transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
							ref={linkRef}
							onMouseLeave={handleMouseLeave}
							onMouseEnter={handleSubMouseEnter}
							className="pf bg-cbd-brand-5 h-[55px]  w-[280px] py-0 px-[55px] fcc"
							style={pos}
						>
							<p
								onClick={() => changeLocale("en")}
								className=" cursor-pointer hover:text-cbd-yellow-2 mx-[20px] text-[16px] text-cbd-white"
							>
								EN
							</p>
							<p
								onClick={() => changeLocale("zh")}
								className=" cursor-pointer hover:text-cbd-yellow-2 mx-[20px] text-[16px] text-cbd-white"
							>
								CN
							</p>
						</motion.div>
					) : (
						<></>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
}
