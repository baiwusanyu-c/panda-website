
import ShopCarousel from '@/components/shop-carousel'
// TODO: 接口返回
export default function AboutPage() {
  return (
      <div className="chanpanda-about overflow-x-hidden bg-cbd-white w-full">
        <div className='w-full fcc flex-col pt-[80px]'>
          <h1 className='text-[44px] text-cbd-brand-5 leading-[1.5] font-bold'>Image Display</h1>
          <h2 className='text-[32px] text-cbd-gray-6'>形象展示</h2>
          <ShopCarousel/>
        </div>
        <div>
            <h2></h2>
        </div>
        <div>
            <h2></h2>
        </div>
      </div>
  );
}
