import { motion } from "motion/react";
import { genVariant } from "@/utils";

export function PandaTeaIntroduction(props: { intro: string }) {
  return <motion.div
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
          {props.intro}
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
}
