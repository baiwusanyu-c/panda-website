'use client'
import {motion} from "motion/react";
import {genVariant} from "@/utils";
import {Wave} from "@/components/wave";
import Image from "next/image";

export default function ProductPage() {
  return (
      <div className="panda-tea-product overflow-x-hidden bg-cbd-white w-full">
        <motion.div
            className='overflow-hidden w-full flex-col pr left-0 top-0'
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.4}}>
          <div className='mx-auto mb-[60px] max-w-[1500px] min-w-[1200px] w-[94%] mt-[200px]'>
            <motion.div
                variants={genVariant(0)}
                className='text-[44px] text-cbd-brand-5  leading-[1] font-bold'>
              Product
              <br/>
              Recommendation
            </motion.div>
            <motion.div
                variants={genVariant(0.5)}
                className='text-[32px] text-cbd-gray-6 mt-[10px]'>
              产品推荐
            </motion.div>
          </div>
          <div className='w-full'>
            <div className='w-full h-[150px] overflow-hidden pr left-0 top-0 '>
              <Wave/>
            </div>
            <div className='bg-cbd-brand-5 h-[580px]'>
              <div className='fcc pr left-0 -top-[320px]'>
                <Image
                    src="/honor.webp"
                    alt="panda tea honor"
                    width={1250}
                    height={560}
                    priority
                />
              </div>
              <div className=' my-0 w-full pr left-0 -top-[320px]'>
                <div className='w-[46%] bg-[#2545cb] pt-[46%] rounded-full left-0 top-[100px] pa'></div>
                <div
                    className='w-[50%] border-solid border border-cbd-green-4 pt-[50%] rounded-full left-[30%] top-[100px] pa'></div>
                <div className='w-[16%] bg-[#2545cb] pt-[16%] rounded-full -right-[8%] -top-[200px] pa'></div>
                <div className='w-[6%] bg-[#2545cb] pt-[6%] rounded-full right-[6%] top-[120px] pa'></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
  );
}
