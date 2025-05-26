"use client";
import { type ReactNode, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";
import { Tooltip } from "@heroui/tooltip";
import type { MenuItem } from "@/app/api/route";
import { useLocale } from "next-intl";

export interface NavItemProps {
	children: ReactNode;
	url: string;
	links?: MenuItem[];
}
export function NavItem(props: NavItemProps) {
	const linkRef = useRef<HTMLDivElement | null>(null);
	const [show, setShow] = useState(false);
	const [pos, setPos] = useState<{
		left: string;
		top: string;
	}>();
	function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
		e.stopPropagation();
		if ((props.links || []).length > 0) {
			handleSubMouseEnter();
			setTimeout(() => {
				if (linkRef.current) {
					const rect = (e.target as HTMLDivElement).getBoundingClientRect();
					const subLinkRect = (
						linkRef.current as HTMLDivElement
					).getBoundingClientRect();
					setPos({
						top: `${rect.top + rect.height}px`,
						left: `${rect.left - subLinkRect.width / 2}px`,
					});
				}
			}, 100);
		}
	}

	function handleMouseLeave() {
		setShow(false);
	}

	function handleSubMouseEnter() {
		setShow((props.links || []).length > 0);
	}
	const pathname = usePathname();
	const isActiveCls = useMemo(() => {
		return props.url === pathname ? "pr link-item--active" : "link-item pr";
	}, [pathname, props.url]);
	const lang = useLocale();
	return (
		<>
			<div
				className={isActiveCls}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{props.children}
			</div>
			<AnimatePresence>
				{show ? (
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
						key={show ? "fade-in-link" : "fade-out-link"}
						transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
						ref={linkRef}
						onMouseLeave={handleMouseLeave}
						onMouseEnter={handleSubMouseEnter}
						className="pf bg-cbd-brand-5 h-[55px]  max-w-max py-0 px-[55px] fcc"
						style={pos}
					>
						{(props.links || []).filter((u) => u.show).map((url) => {
							return !url.children || url.children.length === 0 ? (
								<Link
									className="text-[16px] text-cbd-white hover:text-cbd-yellow-2 mx-[20px]"
									key={url.id}
									href={url.path}
								>
									{lang === "en" ? url.nameEn : url.name}
								</Link>
							) : (
								<Tooltip
									offset={20}
									placement="bottom"
									content={
										<div
											className="bg-cbd-brand-5 rounded-[8px]"
											aria-label="navigate dropdown"
										>
											{(url.children as MenuItem[]).map((v) => {
												return (
													<Link
														key={v.id}
														className="block p-[10px] box-border w-full text-[16px] text-cbd-white hover:text-cbd-yellow-2"
														href={v.path}
													>
														{lang === "en" ? v.nameEn : v.name}
													</Link>
												);
											})}
										</div>
									}
									key={url.id}
								>
									<Link
										className="text-[16px] text-cbd-white hover:text-cbd-yellow-2 mx-[20px]"
										href={url.path}
									>
										{lang === "en" ? url.nameEn : url.name}
									</Link>
								</Tooltip>
							);
						})}
					</motion.div>
				) : (
					<></>
				)}
			</AnimatePresence>
		</>
	);
}
