'use client'
import type {BasicInfo} from "@/app/api/route";
import Link from "next/link";
// 添加动画后，无法在浏览器开发工具 preview，但是 response 里是有 dom 的
import { motion } from "motion/react"
import { genVariant } from "@/utils";
// TODO:i18n
export function PandaFooter({
data,
children,
}:Readonly<{
  data: BasicInfo
  children?:React.ReactNode;
}>){
  return <footer>
    { children ? children :<></> }
    <div className='h-[130px] bg-cbd-brand-5 w-full fcc'>
      <motion.div
        className='overflow-hidden'
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div
          variants={genVariant(0)}
          className='text-cbd-brand-8 text-[16px] text-center leading-[23px] mt-[10px]'>
          版权所有：{data.footerInfo.name}
        </motion.div>
        <motion.div
          variants={genVariant(0.3)}
          className='text-cbd-brand-8 text-[16px] text-center leading-[23px] mt-[10px] fbc'>
          <Link href={data.footerInfo.beian.url}
                        target='_blank'>
            备案号：{data.footerInfo.beian.no}
        </Link>
          <span>成都总部地址：{data.footerInfo.addr}</span>
          <span>网站总访问量：{data.footerInfo.visits}</span>
        </motion.div>
        <motion.div
          variants={genVariant(0.6)}
          className='text-cbd-white text-[16px] text-center leading-[23px] mt-[10px]'>
          <span>茬白稻唯一官网：{data.footerInfo.website}</span>
          <span className='mx-[10px]'> 加盟热线：{data.footerInfo.franchiseHotline}</span>
          <span className='mr-[10px]'>客服热线：{data.footerInfo.customerServiceHotline}</span>
          <Link href={data.footerInfo.support.url}
                          target='_blank'>
            技术支持：{data.footerInfo.support.name}
        </Link>
        </motion.div>
      </motion.div>
    </div>
  </footer>
}
