"use client";
import ShopCarousel from "@/components/shop-carousel";
import { Wave } from "@/components/wave";
import { motion } from "motion/react";
import { genVariant } from "@/utils";
import Image from "next/image";
import { PandaTeaIntroduction } from "@/components/introduction";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";
// TODO: 走马灯卡顿
export default function AboutView() {
	const t = useTranslations("about");
	const honors = useMemo(() => {
		return ["honor1", "honor2", "honor3", "honor4", "honor5"].map((key) => {
			return t(`honors.${key}`);
		});
	}, [t]);
	const lang = useLocale();
	return (
		<div className="panda-tea-about overflow-x-hidden bg-cbd-white w-full">
			<motion.div
				id="1"
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.2 }}
				className="overflow-hidden w-full fcc flex-col pt-[80px]"
			>
				<motion.div
					variants={genVariant(0)}
					className="text-[44px] text-cbd-brand-5 leading-[1.5] font-bold"
				>
					Image Display
				</motion.div>
				<motion.div
					variants={genVariant(0.3)}
					className="text-[32px] text-cbd-gray-6"
				>
					{lang === "zh" ? "形象展示" : ""}
				</motion.div>
				<ShopCarousel />
			</motion.div>
			<PandaTeaIntroduction intro={t(`introduce`)} id="2" />
			<motion.div
				id="3"
				className="overflow-hidden w-full flex-col pr left-0 top-0"
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.4 }}
			>
				<div className="mx-auto mb-[60px] max-w-[1500px] min-w-[1200px] w-[94%]">
					<motion.div
						variants={genVariant(0)}
						className="text-[44px] text-cbd-brand-5 leading-[1.5] font-bold"
					>
						Honor Chapter
					</motion.div>
					<motion.div
						variants={genVariant(0.5)}
						className="text-[32px] text-cbd-gray-6"
					>
						{lang === "zh" ? "荣誉篇章" : ""}
					</motion.div>
				</div>
				<div className="w-full">
					<div className="w-full h-[150px] overflow-hidden pr left-0 top-0 ">
						<Wave />
					</div>
					<div className="bg-cbd-brand-5 h-[630px]">
						<div className="fcc pr left-0 -top-[320px]">
							<Image
								src="/honor.webp"
								alt="panda tea honor"
								width={1250}
								height={560}
								priority
							/>
						</div>
						<div className="mx-auto my-0 max-w-[1500px] min-w-[1200px] w-[94%] pr left-0 -top-[320px]">
							{honors.map((item, index) => {
								return (
									<motion.div
										variants={genVariant(0.5 * (index + 1.1))}
										key={item}
										className="text-[22px] text-cbd-white leading-[60px] border-0 border-b-1 border-solid border-cbd-brand-10"
									>
										{item}
									</motion.div>
								);
							})}
							<motion.div
								variants={genVariant(0.5 * ((honors.length + 1) * 1.1))}
								className="text-[22px] text-cbd-white leading-[60px] border-0 border-b-1 border-solid border-cbd-brand-10"
							>
								...
							</motion.div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
