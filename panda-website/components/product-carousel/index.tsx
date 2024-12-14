import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
// TODO 动画
const DEFAULT_ARR = [1, 2, 3, 4, 5, 6, 7]
// TODO 接口数据获取
const DEFAULT_PRODUCT_ARR = [
    '茉莉奶绿',
    '杨枝甘露',
    '西瓜啵啵',
    '超级杯水果茶',
    '招牌芋圆奶茶',
    '芒芒生打椰',
    '青提茉莉',
]
export function ProductCarousel(){
    const [list, setList] = useState(DEFAULT_ARR);
    const [active, setActive] = useState(4);
    const handleNext = () => {
        const res = active + 1
        setActive(res > 7 ? 1 : res);
    }
    const handlePrev = () => {
        const res = active - 1
        setActive(res < 1 ? 7 : res);
    }
    useEffect(() => {
        const index = DEFAULT_ARR.indexOf(active);
        // 使用切片操作，将数组从给定数字位置重新排列
        const result = [...DEFAULT_ARR.slice(index - 3), ...DEFAULT_ARR.slice(0, index - 3)];
        setList(result);
    }, [active]);

    const activeCls = (index: number) => {
        const cls = 'fcc w-[100px]  h-[100px] rounded-full pr left-0 top-0';
        if((index + 1) === 4){
            return `${cls} mx-[60px]`
        }
        return `${cls} bg-cbd-white mx-[40px]`
    }

    const activeImgContainerCls = (index: number) => {
        const cls = ''
        if((index + 1) === 4){
            return `${cls} pa h-[600px] w-[342px] -left-[110px] bottom-[100px]`
        }
        return cls
    }

    const activeImgSizeCls = (index: number) => {
        if((index + 1) === 4){
            return 600
        }
        return 38
    }

    return <div className="w-full h-[500px] pr left-0 top-0 flex justify-center items-end flex-row">
        <div className='fcc h-[100px] w-[100px]'>
            <div
                onClick={handlePrev}
                role='button'
                className='h-[60px] w-[60px]
                bg-[#2545cb]
                hover:bg-cbd-yellow-2 cursor-pointer rounded-full fcc'>
                <ArrowLeftOutlined className='hover:text-[#2545cb] text-cbd-brand-4 text-[20px]'/>
            </div>
        </div>
        <div className='fcc flex-row'>
            {
                list.map((item, index) => {
                    return <div key={`${item}-product`} className={activeCls(index)}>
                        <div className={activeImgContainerCls(index)}>
                            <Image
                                src={`/product/product${item}.webp`}
                                alt={`panda tea product ${item}`}
                                width={activeImgSizeCls(index)}
                                height={activeImgSizeCls(index)}
                                priority
                            />
                            { (index + 1) === 4 ? <p className='text-[28px] text-cbd-white font-bold text-center w-full'>
                                {DEFAULT_PRODUCT_ARR[item - 1]}
                            </p> :<></>}
                        </div>
                    </div>
                })
            }
        </div>
        <div className='fcc h-[100px] w-[100px]'>
            <div
                onClick={handleNext}
                role='button'
                className='h-[60px] w-[60px]
                bg-[#2545cb]
                hover:bg-cbd-yellow-2 cursor-pointer rounded-full fcc'>
                <ArrowRightOutlined className='hover:text-[#2545cb] text-cbd-brand-4 text-[20px]'/>
            </div>
        </div>
    </div>
}
