'use client'
import {ReactNode, useEffect, useRef} from 'react'
import { useState } from 'react'
import type { LinkItem } from "@/components/nav/index";
import Link from "next/link";
export interface NavItemProps {
  children: ReactNode;
  links?: LinkItem[]
}
export function NavItem(props: NavItemProps) {

  const  linkRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState<{
    left: string
    top: string
  }>();
  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    if((props.links || []).length > 0){
      handleSubMouseEnter()
      setTimeout(() => {
        if(linkRef.current){
          const rect = (e.target as HTMLDivElement).getBoundingClientRect();
          const subLinkRect = (linkRef.current as HTMLDivElement).getBoundingClientRect();
          setPos({
            top: `${rect.top + rect.height}px`,
            left: `${rect.left - subLinkRect.width / 2 }px`,
          })
        }
      }, 100)
    }
  }


  function handleMouseLeave(){
   setShow(false);
  }

  function handleSubMouseEnter(){
    setShow((props.links || []).length > 0);
  }
  return (
    <>
      <div onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
        {props.children}
      </div>
      {
        show ? <div
          ref={linkRef}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleSubMouseEnter}
          className="pf bg-cbd-brand-5 h-[55px] rounded-bl-full rounded-br-full max-w-max py-0 px-[55px] fcc" style={pos}>
          {(props.links || []).map((url) => (
            <Link
              className='text-[16px] text-cbd-white hover:text-cbd-yellow-2 mx-[20px]'
              key={url.value}
              href={url.value}>
              {url.label}
            </Link>
          ))}
          </div> : <></>
      }
    </>
  )
}
