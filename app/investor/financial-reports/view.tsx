"use client";

import { motion } from "motion/react";
import { genVariant } from "@/utils";
import Image from "next/image";
import type { FinancialReportsInfo } from "@/request";
import { UpCircleOutlined, DownCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FinancialReportsView(props: {
	list: FinancialReportsInfo["list"];
}) {
	const { list } = props;
	const [activeIndex, setActiveIndex] = useState<number>(0);
	function add() {
		const res = activeIndex + 1;
		setActiveIndex(res > list.length - 1 ? 0 : res);
	}
	function desc() {
		const res = activeIndex - 1;
		setActiveIndex(res < 0 ? list.length - 1 : res);
	}

	const [isHover, setHover] = useState<boolean>(false);
	const t = useTranslations("investor");
	return (
		<div className="panda-tea-about overflow-x-hidden bg-cbd-white w-full">
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				id="1"
				viewport={{ once: true, amount: 0.2 }}
				className="overflow-hidden w-full fcc flex-col pt-[40px]"
			>
				<motion.div
					variants={genVariant(0)}
					className="text-[32px] text-cbd-gray-6 fcc flex-col"
				>
					{t("reports")}
					<p className="w-[80px] h-[6px] rounded-2xl bg-cbd-brand-5 mt-[20px]"></p>
				</motion.div>
				<div className="fsc h-[570px] mx-auto -0 max-w-[1500px] min-w-[1200px] w-[94%] my-[120px]">
					<div className="w-[274px] fbc flex-col h-[517px] select-none">
						<UpCircleOutlined
							onClick={desc}
							className="hover:!text-cbd-brand-5 fcc !text-cbd-gray-4 cursor-pointer"
							style={{ fontSize: "36px" }}
						/>
						<div className="fcc flex-col w-full">
							{list.map((item, index) => (
								<div className="fcc flex-col w-full" key={item.title}>
									<span
										onClick={() => setActiveIndex(index)}
										className={`${activeIndex === index ? "text-[70px]" : "text-[50px]"} font-bold text-cbd-brand-5 transition-all cursor-pointer`}
									>
										{item.date}
									</span>
									{index !== list.length - 1 ? (
										<span className="bg-cbd-gray-4 w-full h-[1px]"></span>
									) : (
										<></>
									)}
								</div>
							))}
						</div>
						<DownCircleOutlined
							onClick={add}
							className="hover:!text-cbd-brand-5 fcc !text-cbd-gray-4 cursor-pointer"
							style={{ fontSize: "36px" }}
						/>
					</div>
					<a
						className="fcc flex-col ml-[120px]"
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						href={list[activeIndex].link}
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src={`/investor/financial-reports${activeIndex}.webp`}
							alt="financial-reports"
							className="mb-[12px] rounded-tr-[60px] rounded-bl-[60px]"
							width={340}
							height={453}
							priority
						/>
						<span className="text-[18px] text-cbd-gray-6 mt-[6px]">
							{list[activeIndex].title}
						</span>
						<div
							className={`bg-cbd-brand-5 transition-all rounded-full h-[6px] mt-[20px] ${isHover ? "w-1/2" : "w-[0px]"}`}
						></div>
					</a>
				</div>
			</motion.div>
		</div>
	);
}
