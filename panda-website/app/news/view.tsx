'use client'
import {motion} from "motion/react";
import {genVariant} from "@/utils";
import type { NewsInfo } from "@/app/news/api/route";
import { InfoCard } from "@/components/info-card";
interface NewsViewProps {
    news: NewsInfo['news'];
}
export default function NewsView(props: NewsViewProps) {
    return (
        <div className="panda-tea-news overflow-x-hidden bg-cbd-white w-full">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.2}}
                className='overflow-hidden w-full fcc flex-col pt-[80px]'>
                <motion.div
                    variants={genVariant(0)}
                    className='text-[44px] text-cbd-brand-5 leading-[1.5] font-bold'>
                    News Center
                </motion.div>
                <motion.div
                    variants={genVariant(0.3)}
                    className='text-[32px] text-cbd-gray-6'>
                    新闻动态
                </motion.div>
                <div className="grid grid-cols-3 gap-4 max-w-[1500px] min-w-[1200px] overflow-hidden pb-[80px] my-0 mx-auto">
                    {
                        props.news.map((info) => {
                            return <motion.div
                                key={info.id}
                                variants={genVariant(0.6)}
                                className='text-[32px] text-cbd-gray-6'>
                                <InfoCard info={info}/>
                            </motion.div>
                        })
                    }
                </div>
            </motion.div>
        </div>
    );
}
