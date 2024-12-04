'use client'
import Link from 'next/link'
import Image from "next/image";
import { PhoneFilled, GlobalOutlined } from '@ant-design/icons'
import { NavItem } from "@/components/nav/NavItem";
import { motion } from "motion/react"
import {useEffect, useState} from "react";

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

// TODO: i18n

export default function PandaNav(props: PandaNavProps) {
  const { list, headerTitle, tel, locale } = props;
  const [linkList, setLinkList] = useState<LinkItem[]>(list);
  const [width, setWidth] = useState(globalThis.innerWidth);

  const handleResize = (init = false) => {
    const browserWidth = globalThis.innerWidth;
    const isSmaller = browserWidth <= width;
    setWidth(browserWidth);
    const updatedLinks = JSON.parse(JSON.stringify(props.list));
    const curLinks = JSON.parse(JSON.stringify(linkList));
    const curLength = curLinks.length;

    const addMoreMenu = (count: number) => {
      const removedLinks = updatedLinks.splice(updatedLinks.length - count, count);
      updatedLinks.push({
        label: "更多",
        value: "/more-page",
        children: removedLinks,
      });
    };

    if(init) {
      if (browserWidth <= 1500 && browserWidth > 1420) {
        addMoreMenu(2);
        setLinkList([...updatedLinks]);
      } else if (browserWidth <= 1420 && browserWidth > 1280) {
        addMoreMenu(3);
        setLinkList([...updatedLinks]);
      } else if (browserWidth <= 1280 && browserWidth > 1100) {
        addMoreMenu(4);
        setLinkList([...updatedLinks]);
      } else if (browserWidth <= 1100 && browserWidth > 960) {
        addMoreMenu(5);
        setLinkList([...updatedLinks]);
      }
      return
    }
    if (isSmaller) {
      if (browserWidth <= 1500 && browserWidth > 1420 && curLength === 8) {
        addMoreMenu(2);
        setLinkList([...updatedLinks]);
      } else if (browserWidth <= 1420 && browserWidth > 1280 && curLength === 7) {
        addMoreMenu(3);
        setLinkList([...updatedLinks]);
      } else if (browserWidth <= 1280 && browserWidth > 1100 && curLength === 6) {
        addMoreMenu(4);
        setLinkList([...updatedLinks]);
      } else if (browserWidth <= 1100 && browserWidth > 960 && curLength === 5) {
        addMoreMenu(5);
        setLinkList([...updatedLinks]);
      }
    } else {
      if (browserWidth < 1500 && browserWidth >= 1420 && curLength === 6) {
        addMoreMenu(2);
        setLinkList([...updatedLinks]);
      } else if (browserWidth < 1420 && browserWidth >= 1280 && curLength === 5) {
        addMoreMenu(3);
        setLinkList([...updatedLinks]);
      } else if (browserWidth < 1280 && browserWidth >= 1100 && curLength === 4) {
        addMoreMenu(4);
        setLinkList([...updatedLinks]);
      } else if (browserWidth >= 1500 ) {
        setLinkList([...updatedLinks]);
      }
    }
  };

  useEffect(() => {
    // 监听窗口大小变化
    const resizeListener = () => handleResize();
    globalThis.addEventListener("resize", resizeListener);

    return () => {
      globalThis.removeEventListener("resize", resizeListener);
    };
  }, [linkList, width]);

  useEffect(() => {
    handleResize(true)
  }, [])
  return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        key='fade-in-nav-header'
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='h-[85px] max-w-[1500px] min-w-[960px] shadow shadow-cbd-white bg-cbd-white rounded-full fbc pf left-0 right-0 top-[15px] my-0 mx-auto pl-[10px] z-[6]'>
      {/* logo */}
      <div className="h-full fcc mx-[20px] w-[300px]">
        <Image
          src="/logo.png"
          alt="panda tea logo"
          width={300}
          height={44}
          priority
        />
      </div>
     <div className="h-full w-auto fcc">
       {(linkList || []).map((url) => (
         <NavItem links={url.children} key={url.value} url={url.value}>
           <Link
             onClick={(e) => {
               if(url.value === '/more-page') {
                 e.preventDefault();
               }
             }}
             className='w-auto h-full block text-[16px] text-cbd-brand-5 hover:font-bold overflow-hidden transition-all duration-[0.4s] py-0 px-[18px] leading-[85px]'
             key={url.value}
             href={url.value}>
             {url.label}
           </Link>
         </NavItem>
       ))}
     </div>
      {/* i18n */}
      <div className="h-full w-[280px] fcc bg-cbd-brand-5 rounded-tr-full rounded-br-full"
           style={{fontFamily: 'var(--oppp-sans)'}}>
        <div className='bg-cbd-white rounded-full fcc h-[30px] w-[30px] ml-[16px]'>
          <PhoneFilled
            rotate={90}
            style={{fontSize: '16px'}}
            className='!text-cbd-brand-5'/>
        </div>
        <ul className="text-cbd-white text-[16px] mx-[10px]">
          {headerTitle}
          <br/>
          <span className='text-cbd-white text-[19px] font-bold'> {tel}</span>
        </ul>
        <div className='fcc h-[30px] mr-[16px]'>
          <GlobalOutlined
            style={{fontSize: '20px'}}
            className='!text-cbd-white'/>
          <span className='text-cbd-white text-[16px] ml-[6px]'> {locale}</span>
        </div>
      </div>
    </motion.div>
  );
}
