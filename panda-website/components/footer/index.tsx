'use client'
import type {BasicInfo} from "@/app/api/route";
import Link from "next/link";
// 添加动画后，无法在浏览器开发工具 preview，但是 response 里是有 dom 的
import { motion } from "motion/react"
import { genVariant } from "@/utils";
import {useTranslations} from "next-intl";

export function PandaFooter({
data,
children,
}:Readonly<{
  data: BasicInfo
  children?:React.ReactNode;
}>){
  const t = useTranslations('common');
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
          {t('footerLabel.copyright')}：{t('footerInfo.name')}
        </motion.div>
        <motion.div
          variants={genVariant(0.3)}
          className='text-cbd-brand-8 text-[16px] text-center leading-[23px] mt-[10px] fbc'>
          <Link href={t('footerInfo.beian.url')}
                        target='_blank'>
            {t('footerLabel.beian')}：{t('footerInfo.beian.no')}
        </Link>
          <span> {t('footerLabel.addr')}：{t('footerInfo.addr')}</span>
          <span> {t('footerLabel.visits')}：{t('footerInfo.visits')}</span>
        </motion.div>
        <motion.div
          variants={genVariant(0.6)}
          className='text-cbd-white text-[16px] text-center leading-[23px] mt-[10px]'>
          <span>{t('footerLabel.website')}：{t('footerInfo.website')}</span>
          <span className='mx-[10px]'> {t('footerLabel.franchiseHotline')}：{t('footerInfo.franchiseHotline')}</span>
          <span className='mr-[10px]'>{t('footerLabel.customerServiceHotline')}：{t('footerInfo.customerServiceHotline')}</span>
          <Link href={t('footerInfo.support.url')}
                          target='_blank'>
            {t('footerLabel.support')}：{t('footerInfo.support.name')}
        </Link>
        </motion.div>
      </motion.div>
    </div>
  </footer>
}
