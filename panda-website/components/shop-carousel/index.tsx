"use client";
import React, { useEffect } from "react";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
	function handleResize() {
		const targetWidth = 1920;
		const dom = document.querySelector("#shop_carousel");
		const currentWidth =
			document.documentElement.clientWidth || document.body.clientWidth;
		const scaleRatio = currentWidth / targetWidth;
		if (dom) {
			(dom as HTMLDivElement).style.transform = `scale(${scaleRatio})`;
		}
	}
	// biome-ignore lint/correctness/useExhaustiveDependencies(handleResize): <explanation>
	useEffect(() => {
		handleResize();
		globalThis.addEventListener("resize", handleResize);
		return () => {
			globalThis.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div className="pr h-full w-[1903px]" id="shop_carousel">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				spaceBetween={40}
				loop={true}
				slidesPerView={"auto"}
				pagination={{
					bulletActiveClass:
						"!bg-cbd-brand-5 !opacity-100 border-[6px] border-solid border-cbd-brand-3 !w-[20px] !h-[20px]",
					horizontalClass: "fcc",
					clickable: true,
				}}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					scale: 0.7,
					depth: 1,
					modifier: 1,
					slideShadows: false,
				}}
				modules={[EffectCoverflow, Pagination]}
			>
				{[1, 2, 3, 4, 5, 6, 7].map((value) => {
					return (
						<SwiperSlide key={`panda tea shop ${value}`}>
							<Image
								src={`/shop/shop${value}.webp`}
								width={951}
								height={570}
								className="rounded-[12px] w-[951px] h-[570px]"
								alt={`panda tea shop${value}.`}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
