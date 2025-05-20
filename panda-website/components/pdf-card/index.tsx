"use client";
import { genVariant } from "@/utils";
import { motion } from "motion/react";
import { PdfIcon } from "../pdf-icon";
import { useMemo } from "react";
import dayjs from "dayjs";
import "./style.css";
export interface PdfCardProps {
	data: {
		link: string;
		date?: string;
		title: string;
		subTitle?: string;
	};
}

export function PdfCard(props: PdfCardProps) {
	const { data } = props;
	const resolveDate = useMemo(() => {
		if (data) {
			return {
				day: dayjs(data.date).format("DD"),
				date: dayjs(data.date).format("YYYY-MM"),
			};
		} else {
			return null;
		}
	}, [data]);
	return (
		<motion.a
			target="_blank"
			href={data.link}
			variants={genVariant(0.6)}
			className="pdf fbc min-h-[100px] py-[15px] px-[30px] rounded-tr-[20px] rounded-bl-[20px] bg-cbd-gray-1 hover:bg-cbd-brand-5 hover:text-cbd-white leading-[40px]"
			rel="noreferrer"
		>
			<div className="fsc">
				{resolveDate ? (
					<>
						<div className="fcc flex-col">
							<p className="leading-[58px] text-[48px] text-cbd-gray-5 font-normal">
								{resolveDate.day}
							</p>
							<p className="leading-[14px] text-[14px] text-cbd-gray-5 font-normal">
								{resolveDate.date}
							</p>
						</div>
						<div className="fcc flex-col ml-[10px]">
							<p className="h-[8px] w-[8px] rounded-full bg-cbd-gray-4 font-normal"></p>
						</div>
					</>
				) : (
					<></>
				)}
				<div className="fss flex-col">
					{data.subTitle ? (
						<>
							<p
								className={`${resolveDate ? "px-[15px]" : "px-[30px]"} text-[18px] text-cbd-brand-5`}
							>
								{data.title}
							</p>
							<p
								className={`${resolveDate ? "px-[15px]" : "px-[30px]"} text-[14px] leading-[20px] text-cbd-gray-5 overflow-hidden text-ellipsis`}
							>
								{data.subTitle}
							</p>
						</>
					) : (
						<p
							className={`${resolveDate ? "px-[15px]" : "px-[30px]"} text-[18px]`}
						>
							{data.title}
						</p>
					)}
				</div>
			</div>
			<PdfIcon
				style={{ width: "40px", height: "40px" }}
				className="stroke-cbd-red-4 pdf-icon"
			/>
		</motion.a>
	);
}
