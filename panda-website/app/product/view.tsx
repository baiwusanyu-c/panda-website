"use client";
import { motion } from "motion/react";
import { genVariant } from "@/utils";
import { Wave } from "@/components/wave";
import { ProductCarousel } from "@/components/product-carousel";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

export default function ProductView() {
	const t = useTranslations("common");
	const list = useMemo(() => {
		return [
			"product1",
			"product2",
			"product3",
			"product4",
			"product5",
			"product6",
			"product7",
		].map((key) => {
			return t(`products.${key}`);
		});
	}, [t]);
	const lang = useLocale();
	return (
		<div className="panda-tea-product overflow-x-hidden bg-cbd-white w-full">
			<motion.div
				className="overflow-hidden w-full flex-col pr left-0 top-0"
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.4 }}
			>
				<div className="mx-auto mb-[180px] max-w-[1500px] min-w-[1200px] w-[94%] mt-[200px]">
					<motion.div
						variants={genVariant(0)}
						className="text-[44px] text-cbd-brand-5  leading-[1] font-bold"
					>
						Product
						<br />
						Recommendation
					</motion.div>
					<motion.div
						variants={genVariant(0.5)}
						className="text-[32px] text-cbd-gray-6 mt-[10px]"
					>
						{lang === "zh" ? "产品推荐" : ""}
					</motion.div>
				</div>
				<div className="w-full">
					<div className="w-full h-[150px] overflow-hidden pr left-0 top-0 ">
						<Wave />
					</div>
					<div className="bg-cbd-brand-5 h-[580px]">
						<div className="fcc pr left-0 -top-[320px]">
							<ProductCarousel list={list} />
						</div>
						<div className=" my-0 w-full pr left-0 -top-[320px]">
							<div className="w-[46%] bg-[#2545cb] pt-[46%] rounded-full left-0 top-[100px] pa"></div>
							<div className="w-[50%] border-solid border border-cbd-green-4 pt-[50%] rounded-full left-[30%] top-[100px] pa"></div>
							<div className="w-[16%] bg-[#2545cb] pt-[16%] rounded-full -right-[8%] -top-[200px] pa"></div>
							<div className="w-[6%] bg-[#2545cb] pt-[6%] rounded-full right-[6%] top-[120px] pa"></div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
