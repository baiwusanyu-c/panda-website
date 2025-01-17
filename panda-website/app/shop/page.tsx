'use client'
import { motion } from "motion/react";
import { genVariant } from "@/utils";
import type { ShopsInfo, ShopsInfoParams } from "@/app/shop/api/route";
import {useDebounceFn, useMount, useUnmount} from 'ahooks'
import { useState} from "react";

export default function NewsView() {
    const [list, setList] = useState<ShopsInfo['shops']>([]);
    const [searchParams, setSearchParams] = useState<ShopsInfoParams>({
        pageNo: 1,
        pageSize: 8,
    });

    const [isAll, setIsAll] = useState<boolean>(false);
    const [curType, setCurType] = useState<number>(-1);
    async function getShopsData(searchParams: ShopsInfoParams){
        const res = await fetch('http://localhost:3000/shop/api', {
            method: 'post',
            body: JSON.stringify(searchParams),
        });
        const resolveRes = await res.json()
        if(curType !== searchParams.type){
            setList(resolveRes.data.shops)
            setCurType(searchParams.type!)
        } else {
            setList(list.concat(resolveRes.data.shops))
        }
        setIsAll(resolveRes.data.isAll)
    }

    const [typeList, setTypeList] = useState<Array<{
        name: string;
        selected: boolean,
        value:  1 | 2 | 3 | 4 | 5 | 6;
    }>>([
        {
            name: '西南',
            selected: false,
            value: 1,
        },
        {
            name: '华北',
            selected: false,
            value: 2,
        },
        {
            name:  '东北',
            selected: false,
            value: 3,
        },
        {
            name: '西北',
            selected: false,
            value: 4,
        },
        {
            name:  '中南',
            selected: false,
            value: 5,
        },
        {
            name: '华东',
            selected: false,
            value: 6,
        },
    ]);

    const [curSelected, setCurSelected] = useState<number>(-1);
    function handleClick(index: number) {
        const selected = !typeList[index].selected;
        const resolveList = typeList.map(item => {
            return {
                ...item,
                selected: false
            }
        })
        resolveList[index].selected = selected
        if(selected){
            setCurSelected(index)
        } else {
            setCurSelected(-1)
        }
        setTypeList([...resolveList]);

        const p = {
            ...searchParams,
            pageNo: 1,
            type: resolveList[index].value
        }
        setSearchParams(p)
        getShopsData(p)

    }


    function handleScroll() {
        if(!isAll){
            const el = document.querySelector('#panda_tea_shops_layout');
            if(el){
                // 获取元素的滚动高度
                const scrollHeight = el.scrollHeight;
                // 获取当前滚动的位置
                const scrollTop = el.scrollTop;
                // 获取元素的可见高度
                const clientHeight = el.clientHeight;

                // 判断是否滚动到了距离底部 60px 的位置
                if (scrollHeight - scrollTop - clientHeight <= 60) {
                    // 如果满足条件，触发
                    const p = {
                        ...searchParams,
                        pageNo: searchParams.pageNo + 1,
                    }
                    setSearchParams(p)
                    getShopsData(p)
                }
            }
        }
    }
    const { run } = useDebounceFn(handleScroll,
      {
          wait: 300,
      },
    );
    useMount(() => {
        getShopsData(searchParams)
        const el = document.querySelector('#panda_tea_shops_layout');
        if(el){
            el.addEventListener('scroll', run)
        }
    });
    useUnmount(() => {
        const el = document.querySelector('#panda_tea_shops_layout');
        if(el){
            el.removeEventListener('scroll', run)
        }
    })
    return (
      <div className="panda-tea-shops bg-cbd-white w-full">
          <div className="fcc pr">
              <div className="fcc pa -top-[49px] z-[2]">
                  {
                      typeList.map((info, index) => {
                          return <div role='button'
                                      key={info.name}
                                      onClick={() => { handleClick(index) }}
                                      className={`
                                  w-[98px] h-[98px] rounded-full shadow-lg text-center 
                                  pf-regular-22 font-bold leading-[98px]  bg-cbd-white 
                                  ${index === curSelected ? '!bg-cbd-brand-5 text-cbd-white' : ''}
                                  hover:bg-cbd-brand-5 hover:text-cbd-white mx-[25px]`}>
                              {info.name}
                          </div>
                      })
                  }
              </div>
              </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.2}}
            className='overflow-hidden w-full fcc flex-col pt-[80px]'>
              <motion.div
                variants={genVariant(0.3)}
                className='text-[32px] text-cbd-gray-6 font-bold'>
                  茬白稻所有门店分布
              </motion.div>
              <div
                className="grid grid-cols-4 max-w-[1500px] min-w-[1200px] overflow-hidden pb-[20px] mt-[60px] mx-auto w-full">
                  {
                      list.map((info, index) => {
                          return <motion.div
                            key={info.id}
                            initial="offscreen"
                            animate="onscreen"
                            variants={genVariant(0.3)}
                            className='border-0 border-b-[1px]  border-solid border-cbd-gray-3 py-[18px] box-border'>
                              <p className='text-[15px] text-cbd-gray-6 leading-[34px]'>{info.name}</p>
                          </motion.div>
                      })
                  }
              </div>
          </motion.div>
      </div>
    );
}
