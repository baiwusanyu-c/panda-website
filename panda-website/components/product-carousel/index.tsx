import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "motion/react";
export function ProductCarousel(props: { list: string[] }) {
	const DEFAULT_ARR = [1, 2, 3, 4, 5, 6, 7];
	const [list, setList] = useState(DEFAULT_ARR);
	const [active, setActive] = useState(4);
	const handleNext = () => {
		const res = active + 1;
		setActive(res > 7 ? 1 : res);
	};
	const handlePrev = () => {
		const res = active - 1;
		setActive(res < 1 ? 7 : res);
	};

	// biome-ignore lint: <active>
	useEffect(() => {
		const index = DEFAULT_ARR.indexOf(active);
		// 使用切片操作，将数组从给定数字位置重新排列
		const result = [
			...DEFAULT_ARR.slice(index - 3),
			...DEFAULT_ARR.slice(0, index - 3),
		];
		setList(result);
		const timer = setInterval(() => {
			handleNext();
		}, 3000);
		return () => {
			clearInterval(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active]);

	const isActive = (index: number) => {
		return index + 1 === 4;
	};

	return (
		<div className="w-full h-[500px] pr left-0 top-0 flex justify-center items-end flex-row select-none">
			<div className="fcc h-[100px] w-[100px]">
				<div
					onClick={handlePrev}
					role="button"
					className="h-[60px] w-[60px]
                bg-[#2545cb]
                hover:bg-cbd-yellow-2 cursor-pointer rounded-full fcc"
				>
					<ArrowLeftOutlined className="hover:text-[#2545cb] !text-cbd-brand-4 text-[20px]" />
				</div>
			</div>
			<div className="fcc flex-row">
				<AnimatePresence initial={true}>
					{list.map((item, index) => {
						return isActive(index) ? (
							<div
								className="fcc w-[100px]  h-[100px] rounded-full pr left-0 top-0 mx-[100px] "
								key={`${item}-product`}
							>
								<motion.div
									key={`product-active`}
									initial={{
										scale: 0,
										boxShadow: "0 0 0 300px rgba(255,255,255,1)",
										backgroundColor: "white",
									}}
									animate={{
										scale: 1,
										boxShadow: "0 0 30px 300px rgba(255,255,255,0)",
										backgroundColor: "transparent",
									}}
									exit={{
										scale: 0,
										boxShadow: "0 0 0 300px rgba(255,255,255,1)",
										backgroundColor: "white",
									}}
									transition={{
										duration: 0.2,
										ease: "easeInOut",
										boxShadow: { duration: 0.2 },
										backgroundColor: { duration: 0.2 },
									}}
									className="pa h-[600px] w-[342px] -left-[110px] bottom-[100px] "
								>
									<Image
										src={`/product/product${item}.webp`}
										alt={`panda tea product ${item}`}
										width={600}
										height={600}
										priority
									/>
									{isActive(index) ? (
										<p className="text-[28px] text-cbd-white font-bold text-center w-full">
											{props.list[item - 1]}
										</p>
									) : (
										<></>
									)}
								</motion.div>
							</div>
						) : (
							<div
								className=" fcc w-[100px]  h-[100px] rounded-full pr left-0 top-0 bg-cbd-white mx-[40px]"
								key={`${item}-product`}
							>
								<Image
									src={`/product/product${item}.webp`}
									alt={`panda tea product ${item}`}
									width={38}
									height={38}
									priority
								/>
							</div>
						);
					})}
				</AnimatePresence>
			</div>
			<div className="fcc h-[100px] w-[100px]">
				<div
					onClick={handleNext}
					role="button"
					className="h-[60px] w-[60px]
                bg-[#2545cb]
                hover:bg-cbd-yellow-2 cursor-pointer rounded-full fcc"
				>
					<ArrowRightOutlined className="hover:text-[#2545cb] !text-cbd-brand-4 text-[20px]" />
				</div>
			</div>
		</div>
	);
}
