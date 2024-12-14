import { motion } from "motion/react";
import { genVariant } from "@/utils";

const INTRODUCTION_ANIMATE = {
  scale: [1, 1, 1, 1, 1],
  rotate: [0, 10, 0, -10, 0],
}
const INTRODUCTION_TRANSITION = {
  duration: 8,
  ease: "linear",
  repeat: Infinity,
}
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
      <motion.div className='pr w-[40%] h-[268px]'>
        <motion.div className='left-[33%] bottom-0 pa pt-[35%] w-[35%] bg-[#ebf2f8] rounded-[100%]'
          animate={INTRODUCTION_ANIMATE}
          transition={INTRODUCTION_TRANSITION}
        >
          <span
            style={{fontFamily: 'var(--oppp-sans)'}}
            className='w-full h-auto overflow-hidden pa left-0 top-[60%] text-center text-[18px] text-cbd-gray-6 font-[500]'>茶百道2008年创立</span>
        </motion.div>
        <motion.div
          animate={INTRODUCTION_ANIMATE}
          transition={INTRODUCTION_TRANSITION}
          className='right-[22%] top-0 pa pt-[25%] w-[25%] border border-solid border-cbd-gray-3 rounded-[100%]'>
          <span
            style={{fontFamily: 'var(--oppp-sans)'}}
            className='w-full h-auto overflow-hidden pa left-0 top-[45%] text-center text-[18px] text-cbd-gray-6 font-[500]'>品牌IP</span>
        </motion.div>
        <motion.div
          animate={INTRODUCTION_ANIMATE}
          transition={INTRODUCTION_TRANSITION}
          className='right-[10%] bottom-[7%] pa pt-[20%] w-[20%] bg-cbd-yellow-1 rounded-[100%]'>
          <span
            style={{fontFamily: 'var(--oppp-sans)'}}
            className='w-full h-auto overflow-hidden pa left-0 top-[45%] text-center text-[18px] text-cbd-gray-6 font-[500]'>新鲜优果</span>
        </motion.div>
        <motion.div
          animate={INTRODUCTION_ANIMATE}
          transition={INTRODUCTION_TRANSITION}
          className='right-[5%] top-[16%] pa pt-[17%] w-[17%] bg-cbd-gray-2 rounded-[100%]'>
          <span
            style={{fontFamily: 'var(--oppp-sans)'}}
            className='w-full h-auto overflow-hidden pa left-0 top-[40%] text-center text-[18px] text-cbd-gray-6 font-[500]'>原生茶香</span>
        </motion.div>
        <motion.div
          animate={{
            rotate: ['1turn'],
          }}
          style={{
            'transformOrigin': '55% 30%'
          }}
          transition={{
            ...INTRODUCTION_TRANSITION,
            duration: 6,
          }}
          className='left-[25%] top-[40%] pa pt-[5%] w-[5%] bg-[#ebf2f8] rounded-[100%]'></motion.div>
        <motion.div
          style={{
            'transformOrigin': '55% 30%'
          }}
          animate={{
            rotate: ['1turn'],
          }}
          transition={{
            ...INTRODUCTION_TRANSITION,
            duration: 6,
          }}
          className='right-[2%] top-[55%] pa pt-[3%] w-[3%] bg-cbd-yellow-2 rounded-[100%]'></motion.div>
      </motion.div>
    </div>
  </motion.div>
}
