'use client'

import {motion} from "motion/react";
import {genVariant} from "@/utils";
import Image from "next/image";

export default function ListingDocsView(props: { link: string}) {
  return (
    <div className="panda-tea-about overflow-x-hidden bg-cbd-white w-full">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        id='1'
        viewport={{once: true, amount: 0.2}}
        className='overflow-hidden w-full fcc flex-col pt-[40px]'>
        <motion.div
          variants={genVariant(0)}
          className='text-[32px] text-cbd-gray-6 fcc flex-col'>
          招股文件
          <p className='w-[80px] h-[6px] rounded-2xl bg-cbd-brand-5 mt-[20px]'></p>
        </motion.div>
        <motion.a
          className='my-[115px] fcc flex-col'
          href={props.link}
          target='_blank'
          variants={genVariant(0.2)}>
          <Image
            src={`/investor/listing-docs.webp`}
            alt="listing docs"
            className='mb-[12px] rounded-tr-[60px] rounded-bl-[60px]'
            width={340}
            height={453}
            priority
          />
          <span className='text-[18px] text-cbd-brand-3'>
            全球发售
          </span>
        </motion.a>
      </motion.div>
    </div>
  );
}
