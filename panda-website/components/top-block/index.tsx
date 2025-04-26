'use client'
import './style.css'
import { motion } from "motion/react"
export function TopBlock(props: {type?: 1 | 2 | 3, isAnimated?: boolean}) {
  const { type = 1, isAnimated = true } = props;
 return (
     <div className="overflow-hidden w-full pr left-0 top-0">
         {
             isAnimated ?  <motion.div
                 initial={{scale: 1.25, skew: 0, rotate: 0, translateX: 0, translateY: 0}}
                 animate={{scale: 1, skew: 0, rotate: 0, translateX: 0, translateY: 0}}
                 key='fade-in-top-block'
                 className={`top-block-${type} w-full pr left-0 top-0 h-full`}
                 transition={{duration: 1.5, ease: "easeIn", }}>
             </motion.div> :  <div
                 key='fade-in-top-block'
                 className={`top-block-${type} w-full pr left-0 top-0 h-full`}>
             </div>
         }
     </div>
 )
}
