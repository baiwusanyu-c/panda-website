"use client";

import { motion } from "motion/react";
import { genVariant } from "@/utils";
import "./style.css";

import type { InvestorResInfo } from "@/app/investor/api/route";
import Image from "next/image";
import { PdfCard } from "@/components/pdf-card";
import {useLocale, useTranslations} from "next-intl";
export interface InvestorProps {
	data: InvestorResInfo;
}
export default function InvestorView(props: InvestorProps) {
	const { data } = props;
	const t = useTranslations("investor");
	const lang = useLocale();
	return (
		<div className="panda-tea-about overflow-x-hidden bg-cbd-white w-full">
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.2 }}
				className="overflow-hidden w-full fcc flex-col pt-[40px]"
			>
				<div className="max-w-[1500px] min-w-[1200px] overflow-hidden mt-[60px] mx-auto w-[94%] pb-[80px]">
					<p className="text-[32px] text-cbd-gray-6 font-bold">
						{" "}
						{t('title')}{" "}
					</p>
					<p className="w-[80px] h-[6px] rounded-2xl bg-cbd-brand-5 mt-[20px]"></p>
					<motion.div variants={genVariant(0.2)} className="fbc">
						<div className="fss flex-col mr-[100px]">
							<p className="text-[16px] text-cbd-gray-5 font-normal my-[40px]">
								{t('description')}
							</p>
							<div className="rounded-full font-normal text-[16px] w-full bg-cbd-gray-2 leading-[40px] h-[40px]">
								<span className="rounded-full py-[10px] bg-cbd-brand-5 px-[20px] text-cbd-white">
									{t('subDescription1')}
								</span>
								<span className="py-[10px]  px-[20px]">
									{t('subDescription2')}
								</span>
							</div>
						</div>
						<Image
							src="/logo_big.webp"
							alt="panda tea logo"
							width={220}
							height={240}
							priority
						/>
					</motion.div>
				</div>

				<motion.div
					variants={genVariant(0.4)}
					className="rounded-tr-[80px] rounded-bl-[80px] max-w-[1500px] min-w-[1200px] overflow-hidden mt-[60px] mx-auto w-[94%] grid grid-cols-2 gap-[10px] my-[80px]"
				>
					<div className="investor-left p-[80px] box-border font-normal text-[16px] text-cbd-white">
						<a
							className="text-[32px] font-600"
							href="/investor/corporate-governance"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							{t('corporate')}{" "}
						</a>
						<p className="w-[80px] h-[6px] rounded-2xl bg-cbd-white mt-[20px]"></p>
						<p className={`${lang === 'zh' ? 'leading-[32px]' : 'leading-[26px]'} w-[60%] mt-[30px]`}>
							{t('description1')}
						</p>
						<a
							href="/investor/corporate-governance"
							target="_blank"
							className="mt-[60px] text-center rounded-[40px] block w-[140px] h-[40px] leading-[40px] bg-cbd-brand-5 cursor-pointer"
							rel="noreferrer"
						>
							{t('more')}
						</a>
					</div>
					<div className="investor-right p-[80px] box-border">
						<a
							href="/investor/corporate-governance"
							target="_blank"
							className="text-[32px] text-cbd-gray-6 font-600"
							rel="noreferrer"
						>
							{" "}
							{t('listingdocs')}{" "}
						</a>
						<p className="w-[80px] h-[6px] rounded-2xl bg-cbd-brand-5 mt-[20px] mb-[30px]"></p>
						{data.listingDocsList.map((info) => {
							return <PdfCard key={info.title} data={info} />;
						})}
					</div>
				</motion.div>

				<div className="max-w-[1500px] min-w-[1200px] overflow-hidden mt-[60px] mx-auto w-[94%] pb-[80px]">
					<p className="text-[32px] text-cbd-gray-6 font-bold"> {t('announcements')} </p>
					<p className="w-[80px] h-[6px] rounded-2xl bg-cbd-brand-5 mt-[20px]"></p>
					<motion.div
						variants={genVariant(0.2)}
						className="grid grid-cols-2 gap-[30px] mt-[40px] "
					>
						{data.announcementsNotices.records.map((info) => {
							return <PdfCard key={info.subTitle} data={info} />;
						})}
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
