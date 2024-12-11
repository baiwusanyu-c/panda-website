'use client'
import ShopCarousel from '@/components/shop-carousel'
import { Wave } from "@/components/wave";
import { motion } from "motion/react"
import { genVariant } from "@/utils";
import Image from "next/image";
// TODO: 走马灯卡顿
export default function AboutView(props: { info: string[], intro: string}) {
  const { info, intro } = props
  return (
    <div className="chanpanda-about overflow-x-hidden bg-cbd-white w-full">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.2}}
        className='overflow-hidden w-full fcc flex-col pt-[80px]' >
        <motion.div
          variants={genVariant(0)}
          className='text-[44px] text-cbd-brand-5 leading-[1.5] font-bold'>
          Image Display
        </motion.div>
        <motion.div
          variants={genVariant(0.3)}
          className='text-[32px] text-cbd-gray-6'>
          形象展示
        </motion.div>
        <ShopCarousel/>
      </motion.div>

      <motion.div
        className='overflow-hidden w-full flex-col pr left-0 top-0 my-[80px]'
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.2}}>
        <div className='mx-auto my-0 max-w-[1500px] min-w-[1200px] w-[94%] fbc'>
          <div className='w-[60%] overflow-hidden'>
            <motion.div
              variants={genVariant(0)}
              className='text-[44px] text-cbd-brand-5 font-bold leading-[1]'>
              Brand
            </motion.div>
            <motion.div
              variants={genVariant(0.3)}
              className='text-[44px] text-cbd-brand-5 font-bold leading-[1]'>
              Introduction
            </motion.div>
            <motion.div
              variants={genVariant(0.4)}
              className='text-[32px] text-cbd-gray-6 leading-[2]'>
              品牌介绍
            </motion.div>
            <motion.p
              variants={genVariant(0.5)}
              style={{textIndent: '2em'}}
              className='text-[16px] text-left leading-[2] my-[10px]'>
              {intro}
            </motion.p>
          </div>
          <div className='pr w-[40%]'>
            <div className='pa w-[35%] h-[35%]'></div>
            <div className='pa w-[25%] h-[25%]'></div>
            <div className='pa w-[20%] h-[20%]'></div>
            <div className='pa w-[17%] h-[17%]'></div>
            <div className='pa w-[5%] h-[5%]'></div>
            <div className='pa w-[3%] h-[3%]'></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className='overflow-hidden w-full flex-col pr left-0 top-0'
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.2}}>
        <div className='mx-auto mb-[60px] max-w-[1500px] min-w-[1200px] w-[94%]'>
          <motion.div
            variants={genVariant(0)}
            className='text-[44px] text-cbd-brand-5 leading-[1.5] font-bold'>
            Honor Chapter
          </motion.div>
          <motion.div
            variants={genVariant(0.3)}
              className='text-[32px] text-cbd-gray-6'>
              荣誉篇章
            </motion.div>
          </div>
          <div className='w-full'>
            <div className='w-full h-[150px] overflow-hidden pr left-0 top-0 '>
              <Wave/>
            </div>
            <div className='bg-cbd-brand-5 h-[630px]'>
              <div className='fcc pr left-0 -top-[320px]'>
                <Image
                  src="/honor.webp"
                  alt="panda tea honor"
                  width={1250}
                  height={560}
                  priority
                />
              </div>
              <div className='mx-auto my-0 max-w-[1500px] min-w-[1200px] w-[94%] pr left-0 -top-[320px]'>
                {
                  info.map((item, index) => {
                    return <motion.div
                      variants={genVariant(0.3 * (index + 1.1))}
                      key={item}
                      className='text-[22px] text-cbd-white leading-[60px] border-0 border-b-1 border-solid border-cbd-brand-10'>
                      {item}
                    </motion.div>
                  })
                }
                <motion.div
                  variants={genVariant(0.3 * ((info.length + 1) * 1.1))}
                  className='text-[22px] text-cbd-white leading-[60px] border-0 border-b-1 border-solid border-cbd-brand-10'>
                  ...
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
    </div>
);
}
