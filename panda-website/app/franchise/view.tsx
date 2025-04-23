'use client'
import type { FranchiseInfo}  from "@/app/franchise/api/route";
import {motion} from "motion/react";
import {genVariant, genVariantX} from "@/utils";
import Image from "next/image";

export interface FranchiseProps{
    info: FranchiseInfo;
}
export default function FranchiseView(props: FranchiseProps){
    const { info } = props;
    return (
        <div className="panda-tea-news overflow-x-hidden bg-cbd-white w-full">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                id='1'
                viewport={{once: true, amount: 0.2}}
                className='overflow-hidden w-full fcc flex-col pt-[80px]'>
                <motion.div
                    variants={genVariant(0)}
                    className='text-[44px] text-cbd-brand-5 leading-[1.5] font-bold'>
                    Advantage
                </motion.div>
                <motion.div
                    variants={genVariant(0.3)}
                    className='text-[32px] text-cbd-gray-6'>
                    加盟优势
                </motion.div>
                <div className="grid grid-cols-6 gap-30 max-w-[1500px] min-w-[1200px] overflow-hidden pb-[80px] mt-[60px] mx-auto">
                    {
                        info.advantage.map((it, index) => {
                            return <motion.div
                                key={it}
                                variants={genVariant(0.6)}
                                className='text-[32px] text-cbd-gray-6 fcc flex-col'>
                                <Image
                                    src={`/franchise/advantage${index + 1}.png`}
                                    alt="franchise tel"
                                    className='mb-[12px]'
                                    width={125}
                                    height={125}
                                    priority
                                />
                                <span className='pf-regular-22 leading-[30px]'>{it}</span>
                            </motion.div>
                        })
                    }
                </div>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                id='2'
                viewport={{once: true, amount: 0.2}}
                className='overflow-hidden w-full bg-cbd-brand-5 '>
                <motion.div variants={genVariantX(0.5 ,-100)} className='fcc h-[165px]'>
                        <Image
                            src="/franchise/tel.png"
                            alt="franchise tel"
                            width={55}
                            height={55}
                            priority
                        />
                        <span className='pf-regular-24 text-[30px] text-cbd-white mr-[72px]'>
                            加盟电话: {info.tel}
                        </span>
                    <span className='pf-regular-24 text-[30px] text-cbd-white'>(接听时段: 09: 00-18: 00)</span>
                </motion.div>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                id='3'
                viewport={{once: true, amount: 0.2}}
                className='overflow-hidden w-full fcc flex-col pt-[80px]'>
                <motion.div
                    variants={genVariant(0)}
                    className='text-[44px] text-cbd-brand-5 leading-[1.5] font-bold'>
                    Process
                </motion.div>
                <motion.div
                    variants={genVariant(0.3)}
                    className='text-[32px] text-cbd-gray-6'>
                    加盟流程
                </motion.div>
                <div className="grid grid-cols-5 gap-10 max-w-[1500px] min-w-[1200px] overflow-hidden pb-[80px] mt-[60px] mx-auto">
                    {
                        info.process.map((it, index) => {
                            return <motion.div
                                key={it.title}
                                variants={genVariant(0.6 * (index * 0.3))}
                                className={`${index === 4 ? '' : 'fsc'}`}>
                                <div
                                    className='w-full h-[164px] bg-cbd-gray-2 px-[20px] py-[28px] rounded-tr-[20px] rounded-bl-[20px]'>
                                    <p className='pf-regular-22 mb-[12px]'>{it.title}</p>
                                    <p className='pf-regular-16 leading-[23px] text-cbd-gray-6'>{it.description}</p>
                                </div>
                                <div className='pr'>
                                    {
                                        index < 4 ?
                                            <span className='pa -right-[20px]'>→</span> :
                                            index > 4 && index !== 9 ?
                                                <span className='pa -right-[20px]'>←</span> :  ''
                                    }
                                    {
                                        <span className='pa -bottom-[20px] left-1/2'>{
                                            index === 4 ? '↓' : ''
                                        }</span>
                                    }
                                </div>
                            </motion.div>
                        })
                    }
                </div>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                id='4'
                viewport={{once: true, amount: 0.2}}
                className='overflow-hidden w-full fcc flex-col pt-[30px]'   >
                <motion.div
                    variants={genVariant(0)}
                    className='text-[44px] text-cbd-brand-5 leading-[1.5] font-bold'>
                    Fee
                </motion.div>
                <motion.div
                    variants={genVariant(0.3)}
                    className='text-[32px] text-cbd-gray-6'>
                    投资费用
                </motion.div>
                <motion.div
                    variants={genVariant(0.6)}>
                    <Image src={'/franchise/fee.webp'}
                           alt='Fee'
                           className='mt-[30px]'
                           priority
                           width={1200}
                           height={2265}/>
                </motion.div>
            </motion.div>
        </div>
    );
}
