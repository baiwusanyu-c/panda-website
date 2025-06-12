"use client";
import type { ResFranchiseDto } from "@/request";
import { motion } from "motion/react";
import { genVariant, genVariantX } from "@/utils";
import Image from "next/image";
import { NormalCard } from "@/components/normal-card";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

export interface FranchiseProps {
	info: ResFranchiseDto[];
}
export default function FranchiseView(props: FranchiseProps) {
	const { info } = props;
	const lang = useLocale();
	const t = useTranslations("franchise");
	const advantages = useMemo(() => {
		return [
			"advantage1",
			"advantage2",
			"advantage3",
			"advantage4",
			"advantage5",
			"advantage6",
		].map((v) => {
			return t(v);
		});
	}, [t]);
	return (
		<div className="panda-tea-news overflow-x-hidden bg-cbd-white w-full">
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				id="1"
				viewport={{ once: true, amount: 0.2 }}
				className="overflow-hidden w-full fcc flex-col pt-[80px]"
			>
				<motion.div
					variants={genVariant(0)}
					className="text-[44px] text-cbd-brand-5 leading-[1.5] font-bold"
				>
					Advantage
				</motion.div>
				<motion.div
					variants={genVariant(0.3)}
					className="text-[32px] text-cbd-gray-6"
				>
					{lang === "zh" ? "加盟优势" : ""}
				</motion.div>
				<motion.div
					variants={genVariant(0.6)}
					className="grid grid-cols-6 gap-10 max-w-[1500px] min-w-[1200px] overflow-hidden pb-[80px] mt-[60px] mx-auto"
				>
					{advantages.map((it, index) => {
						return (
							<div
								key={it}
								className="text-[32px] text-cbd-gray-6 fcc flex-col"
							>
								<Image
									src={`/franchise/advantage${index + 1}.png`}
									alt="franchise tel"
									className="mb-[12px]"
									width={125}
									height={125}
									priority
								/>
								<span
									className={
										lang === "zh"
											? "pf-regular-22 leading-[30px]"
											: "pf-regular-18 leading-[30px]"
									}
								>
									{it}
								</span>
							</div>
						);
					})}
				</motion.div>
			</motion.div>
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				id="2"
				viewport={{ once: true, amount: 0.2 }}
				className="overflow-hidden w-full bg-cbd-brand-5 "
			>
				<motion.div variants={genVariantX(0.5, -100)} className="fcc h-[165px]">
					<Image
						src="/franchise/tel.png"
						alt="franchise tel"
						width={55}
						height={55}
						priority
					/>
					<span className="pf-regular-24 text-[30px] text-cbd-white mr-[72px]">
						{t("tel")}: 4000-515-000
					</span>
					<span className="pf-regular-24 text-[30px] text-cbd-white">
						({t("callTime")}: 09: 00-18: 00)
					</span>
				</motion.div>
			</motion.div>
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				id="3"
				viewport={{ once: true, amount: 0.2 }}
				className="overflow-hidden w-full fcc flex-col pt-[80px]"
			>
				<motion.div
					variants={genVariant(0)}
					className="text-[44px] text-cbd-brand-5 leading-[1.5] font-bold"
				>
					Process
				</motion.div>
				<motion.div
					variants={genVariant(0.3)}
					className="text-[32px] text-cbd-gray-6"
				>
					{lang === "zh" ? "加盟流程" : ""}
				</motion.div>
				<div className="grid grid-cols-5 gap-10 max-w-[1500px] min-w-[1200px] overflow-hidden pb-[80px] mt-[60px] mx-auto">
					{info.map((it, index) => {
						return (
							<motion.div
								key={it.title}
								variants={genVariant(0.6 * (index * 0.3))}
								className={`${index === 4 ? "" : "fsc"}`}
							>
								<NormalCard>
									<p
										className={
											lang === "zh"
												? "pf-regular-22 mb-[12px]"
												: "pf-regular-20 mb-[6px]"
										}
									>
										{lang === "zh" ? it.title : it.titleEn}
									</p>
									<p
										className={`${
											lang === "zh"
												? "pf-regular-16 leading-[24px]"
												: "pf-regular-14 leading-[16px]"
										} text-cbd-gray-6"`}
									>
										{lang === "zh" ? it.detail : it.detailEn}
									</p>
								</NormalCard>
								<div className="pr">
									{index < 4 ? (
										<span className="pa -right-[20px]">→</span>
									) : index > 4 && index !== 9 ? (
										<span className="pa -right-[20px]">←</span>
									) : (
										""
									)}
									{
										<span className="pa -bottom-[20px] left-1/2">
											{index === 4 ? "↓" : ""}
										</span>
									}
								</div>
							</motion.div>
						);
					})}
				</div>
			</motion.div>
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				id="4"
				viewport={{ once: true, amount: 0.2 }}
				className="overflow-hidden w-full fcc flex-col pt-[30px]"
			>
				<motion.div
					variants={genVariant(0)}
					className="text-[44px] text-cbd-brand-5 leading-[1.5] font-bold"
				>
					Fee
				</motion.div>
				<motion.div
					variants={genVariant(0.3)}
					className="text-[32px] text-cbd-gray-6"
				>
					{lang === "zh" ? "投资费用" : ""}
				</motion.div>
				<motion.div variants={genVariant(0.6)}>
					<Image
						src={`/franchise/fee.${lang}.webp`}
						alt="Fee"
						className="mt-[30px]"
						priority
						width={1200}
						height={2265}
					/>
				</motion.div>
			</motion.div>
		</div>
	);
}
