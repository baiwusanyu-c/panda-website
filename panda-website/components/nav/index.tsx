'use client'
import Link from 'next/link'
import Image from "next/image";
import { PhoneFilled, GlobalOutlined } from '@ant-design/icons'
import { NavItem } from "@/components/nav/NavItem";
import { motion } from "motion/react"
export interface LinkItem {
  label: string
  value: string
  children?: LinkItem[]
}
export interface PandaNavProps {
  list: LinkItem[]
  locale: string
  headerTitle: string
  tel: string
}

// TODO: 更多
// TODO: i18n

export default function PandaNav(props: PandaNavProps) {
  return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        key='fade-in-nav-header'
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='h-[85px] w-[78vw] shadow shadow-cbd-white bg-cbd-white rounded-full fbc pf left-0 right-0 top-[15px] mx-auto my-0 pl-[10px]'>
      {/* logo */}
      <div className="h-full w-auto fcc mx-[20px]">
        <Image
          src="/logo.png"
          alt="panda tea logo"
          width={300}
          height={44}
          priority
        />
      </div>
     <div className="h-full w-auto fcc">
       {(props.list || []).map((url) => (
         <NavItem links={url.children} key={url.value} url={url.value}>
           <Link
             className='h-full block text-[16px] text-cbd-brand-5 hover:font-bold w-auto overflow-hidden transition-all duration-[0.4s] py-0 px-[18px] leading-[85px]'
             key={url.value}
             href={url.value}>
             {url.label}
           </Link>
         </NavItem>
       ))}
     </div>
      {/* i18n */}
      <div className="h-full w-auto fcc bg-cbd-brand-5 rounded-tr-full rounded-br-full"
           style={{fontFamily: 'var(--oppp-sans)'}}>
        <div className='bg-cbd-white rounded-full fcc h-[30px] w-[30px] ml-[16px]'>
          <PhoneFilled
            rotate={90}
            style={{fontSize: '16px'}}
            className='!text-cbd-brand-5'/>
        </div>
        <ul className="text-cbd-white text-[16px] mx-[10px]">
          {props.headerTitle}
          <br/>
          <span className='text-cbd-white text-[19px] font-bold'> {props.tel}</span>
        </ul>
        <div className='fcc h-[30px] mr-[16px]'>
          <GlobalOutlined
            style={{fontSize: '20px'}}
            className='!text-cbd-white'/>
          <span className='text-cbd-white text-[16px] ml-[6px]'> {props.locale}</span>
        </div>
      </div>
    </motion.div>
  );
}
