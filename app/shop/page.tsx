"use client";
import { motion } from "motion/react";
import { genVariant } from "@/utils";
import type { ResShopListDto, ShopsInfoParams } from "@/app/shop/api/route";
import { useDebounceFn, useMount, useUnmount } from "ahooks";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { BFF_URL } from "@/utils";
export default function NewsView() {
	const [list, setList] = useState<ResShopListDto["records"]>([]);
	const [searchParams, setSearchParams] = useState<ShopsInfoParams>({
		pageNum: "1",
		pageSize: "8",
	});

	const [isAll, setIsAll] = useState<boolean>(false);
	const [curType, setCurType] = useState<string | undefined>(undefined);
	async function getShopsData(searchParams: ShopsInfoParams) {
		const res = await fetch(`${BFF_URL}/shop/api`, {
			method: "post",
			body: JSON.stringify(searchParams),
		});
		const resolveRes = await res.json();
		if (curType !== searchParams.regionEn) {
			setList(resolveRes.data.records);
			setCurType(searchParams.regionEn!);
		} else {
			setList(list.concat(resolveRes.data.records));
		}
		setIsAll(resolveRes.data.isAll);
	}

	const [typeList, setTypeList] = useState<
		Array<{
			name: string;
			selected: boolean;
			value:
				| "Southwest"
				| "North China"
				| "Northeast"
				| "Northwest"
				| "Central-South"
				| "East China";
		}>
	>([]);

	const lang = useLocale();
	useEffect(() => {
		if (lang === "zh") {
			setTypeList([
				{
					name: "西南",
					selected: false,
					value: "Southwest",
				},
				{
					name: "华北",
					selected: false,
					value: "North China",
				},
				{
					name: "东北",
					selected: false,
					value: "Northeast",
				},
				{
					name: "西北",
					selected: false,
					value: "Northwest",
				},
				{
					name: "中南",
					selected: false,
					value: "Central-South",
				},
				{
					name: "华东",
					selected: false,
					value: "East China",
				},
			]);
		} else {
			setTypeList([
				{
					name: "Southwest",
					selected: false,
					value: "Southwest",
				},
				{
					name: "North China",
					selected: false,
					value: "North China",
				},
				{
					name: "Northeast",
					selected: false,
					value: "Northeast",
				},
				{
					name: "Northwest",
					selected: false,
					value: "Northwest",
				},
				{
					name: "Central South",
					selected: false,
					value: "Central-South",
				},
				{
					name: "East China",
					selected: false,
					value: "East China",
				},
			]);
		}
	}, [lang]);
	const [curSelected, setCurSelected] = useState<string | undefined>(undefined);
	function handleClick(index: number) {
		const selected = !typeList[index].selected;
		const resolveList = typeList.map((item) => {
			return {
				...item,
				selected: false,
			};
		});
		resolveList[index].selected = selected;
		if (selected) {
			setCurSelected(resolveList[index].value);
		} else {
			setCurSelected(undefined);
		}
		setTypeList([...resolveList]);

		const p = {
			...searchParams,
			pageNum: "1",
			regionEn: resolveList[index].value,
		};
		setSearchParams(p);
		getShopsData(p);
	}
	function handleScroll() {
		if (!isAll) {
			const el = document.querySelector("#panda_tea_shops_layout");
			if (el) {
				// 获取元素的滚动高度
				const scrollHeight = el.scrollHeight;
				// 获取当前滚动的位置
				const scrollTop = el.scrollTop;
				// 获取元素的可见高度
				const clientHeight = el.clientHeight;

				// 判断是否滚动到了距离底部 60px 的位置
				if (scrollHeight - scrollTop - clientHeight <= 60) {
					// 如果满足条件，触发
					const p = {
						...searchParams,
						pageNum: `${Number(searchParams.pageNum) + 1}`,
					};
					setSearchParams(p);
					getShopsData(p);
				}
			}
		}
	}
	const { run } = useDebounceFn(handleScroll, {
		wait: 300,
	});
	useMount(() => {
		getShopsData(searchParams);
		const el = document.querySelector("#panda_tea_shops_layout");
		if (el) {
			el.addEventListener("scroll", run);
		}
	});
	useUnmount(() => {
		const el = document.querySelector("#panda_tea_shops_layout");
		if (el) {
			el.removeEventListener("scroll", run);
		}
	});
	const t = useTranslations("stores");
	return (
		<div className="panda-tea-shops bg-cbd-white w-full">
			<div className="fcc pr">
				<div className="fcc pa -top-[49px] z-[2]">
					{typeList.map((info, index) => {
						return (
							<div
								role="button"
								key={info.name}
								onClick={() => {
									handleClick(index);
								}}
								className={`
                                  w-[98px] h-[98px] rounded-full shadow-lg text-center 
                                  leading-[98px]  bg-cbd-white 
                                  ${lang === "zh" ? "pf-regular-22 font-bold" : "pf-regular-14 text-cbd-gray-6"}
                                  ${info.value === curSelected ? "!bg-cbd-brand-5 text-cbd-white" : ""}
                                  hover:bg-cbd-brand-5 hover:text-cbd-white mx-[25px]`}
							>
								{info.name}
							</div>
						);
					})}
				</div>
			</div>
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.2 }}
				className="overflow-hidden w-full fcc flex-col pt-[80px]"
			>
				<motion.div
					variants={genVariant(0.3)}
					className="text-[32px] text-cbd-gray-6 font-bold"
				>
					{t(!curSelected ? "title" : curSelected)}
				</motion.div>
				<div className="grid grid-cols-4 max-w-[1500px] min-w-[1200px] overflow-hidden pb-[20px] mt-[60px] mx-auto w-full">
					{list.map((info) => {
						return (
							<motion.div
								key={info.id}
								initial="offscreen"
								animate="onscreen"
								variants={genVariant(0.3)}
								className="border-0 border-b-[1px]  border-solid border-cbd-gray-3 py-[18px] box-border"
							>
								<p className="text-[15px] text-cbd-gray-6 leading-[34px]">
									{lang === "zh" ? info.name : info.nameEn}
								</p>
							</motion.div>
						);
					})}
				</div>
			</motion.div>
		</div>
	);
}
