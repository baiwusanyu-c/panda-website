import Link from 'next/link'

export interface LinkItem {
  label: string
  value: string
}
export interface PandaNavProps {
  list: LinkItem[]
}

// TODO: 404 不显示
// TODO: 下拉
// TODO: 动画
// TODO: 更多

export default async function PandaNav(props: PandaNavProps) {
  return (
    <div className='h-[85px] w-[78vw] shadow shadow-cbd-white bg-cbd-white rounded-full fcc pf left-0 right-0 top-[15px] mx-auto my-0'>
      {/* logo */}
     <div className="h-full w-auto fcc">
       {(props.list || []).map((url) => (
         <Link
           className='text-[16px] text-cbd-brand-5 hover:font-bold w-auto overflow-hidden transition-all duration-[0.4s] py-0 px-[18px] leading-[85px]'
           key={url.value}
           href={url.value}>
           {url.label}
         </Link>
       ))}
     </div>
      {/* i18n */}
    </div>
  );
}
