"use client";

import type { ContactInfo } from "@/app/contact/api/route";
import { motion } from "motion/react";
import { genVariant } from "@/utils";
import {
	EnvironmentFilled,
	HeartFilled,
	IeCircleFilled,
	MailFilled,
	PhoneFilled,
	WarningFilled,
	WechatFilled,
} from "@ant-design/icons";
import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";

const AMapLoader = async () => {
	return (await import("@amap/amap-jsapi-loader")).default;
};

export interface ContactViewProps {
	data: ContactInfo;
}
export function ContactView(props: ContactViewProps) {
	const { data } = props;
	const mapRef = useRef(null);
	useEffect(() => {
		async function load() {
			const loader = await AMapLoader();
			loader
				.load({
					key: "a068fbf86a7bfab0595256d5a5f21922",
					version: "2.0",
					plugins: [],
				})
				.then((AMap) => {
					mapRef.current = new AMap.Map("amp_map", {
						// 设置地图容器id
						viewMode: "3D", // 是否为3D地图模式
						zoom: 11, // 初始化地图级别
						center: [104.066541, 30.572269], // 初始化地图中心点位置
					});
				})
				.catch((e) => {
					console.log(e);
				});
		}
		load();
		return () => {
			// @ts-expect-error ignore amap lib
			mapRef.current?.destroy();
		};
	});

	const lang = useLocale();
	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0 }}
			className="w-full fcc  h-[460px] pr"
		>
			<motion.div
				variants={genVariant(0.3)}
				className="pt-[70px] px-[70px] bg-cbd-white pa fsc flex-col z-[2] rounded-[20px] h-[870px] shadow-xl max-w-[1500px] min-w-[1200px] overflow-hidden w-full"
			>
				<div className="text-[44px] text-cbd-brand-5 leading-[1.5] font-bold">
					Contact Us
				</div>
				<div className="text-[32px] text-cbd-gray-6">
					{lang === "zh" ? "联系我们" : ""}
				</div>
				<div className="bg-cbd-brand-1 h-[260px] fsc w-full mt-[35px] py-[40px]">
					<div
						className={`w-1/5 fcc text-cbd-brand-5 leading-[72px] text-[30px] font-bold`}
					>
						{lang === "zh" ? data.headquarter.name : data.headquarter.nameEn}
					</div>
					<div
						className={`
                    ${lang === "zh" ? "text-[16px]" : "text-[14px] leading-[24px]"}
                    grid grid-cols-2 gap-x-60 text-cbd-gray-6 fsc leading-[40px]`}
					>
						<div className={`fsc ${lang === "zh" ? "" : "leading-[24px]"}`}>
							<EnvironmentFilled className="!text-cbd-brand-5 text-[23px] mr-[15px]" />
							{lang === "zh"
								? data.headquarter.address
								: data.headquarter.addressEn}
						</div>
						<div className="fsc">
							<WechatFilled className="!text-cbd-brand-5 text-[23px] mr-[15px]" />
							{data.headquarter.weChat}
						</div>
						<div className="fsc">
							<IeCircleFilled className="!text-cbd-brand-5 text-[23px] mr-[15px]" />
							{data.headquarter.website}
						</div>
						<div className="fsc">
							<PhoneFilled className="!text-cbd-brand-5 text-[23px] mr-[15px]" />
							{data.headquarter.supervisionPhone}
						</div>
						<div className="fsc">
							<MailFilled className="!text-cbd-brand-5 text-[23px] mr-[15px]" />
							{data.headquarter.email}
						</div>
						<div className="fsc">
							<WarningFilled className="!text-cbd-brand-5 text-[23px] mr-[15px]" />
							{data.headquarter.networkSecurity}
						</div>
						<div className="fsc">
							<PhoneFilled className="!text-cbd-brand-5 text-[23px] mr-[15px]" />
							{data.headquarter.franchiseHotline}
						</div>
						<div className="fsc">
							<HeartFilled className="!text-cbd-brand-5 text-[23px] mr-[15px]" />
							{data.headquarter.reportingMobile}
						</div>
						<div className="fsc">
							<PhoneFilled className="!text-cbd-brand-5 text-[23px] mr-[15px]" />
							{data.headquarter.customerServiceHotline}
						</div>
					</div>
				</div>
				<div
					className={`
                    ${lang === "zh" ? "text-[16px]" : "text-[12px]"} 
                    grid grid-cols-2 gap-x-60 text-cbd-gray-6 leading-[36px] mt-[35px] text-left w-full`}
				>
					{data.operationCenters.map((c) => {
						return (
							<div key={c.address}>
								{lang === "zh" ? c.name : c.nameEn}:
								{lang === "zh" ? c.address : c.addressEn}
							</div>
						);
					})}
				</div>
			</motion.div>
		</motion.div>
	);
}
