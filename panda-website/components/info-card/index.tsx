import type {NewsInfoIer} from "@/app/news/api/route";

interface InfoCardProps {
    info: NewsInfoIer
}
export function InfoCard(props: InfoCardProps) {
    const {
        info
    } = props;
    return <div
        style={{
            transition: 'all 0.3s ease',
        }}
        className='bg-cbd-gray-1 p-[30px] box-border rounded-none rounded-tr-[50px] hover:shadow-xl'>
        <a target="_blank" href={info.link} >
            <div className='text-[22px] font-bold text-cbd-gray-7 text-ellipsis overflow-hidden whitespace-nowrap'>
                {info.title}
            </div>
            <div className='text-[16px] text-cbd-gray-7 text-ellipsis overflow-hidden whitespace-nowrap leading-[60px]'>
                {info.detail}
            </div>
            <div className='text-[14px] text-cbd-brand-5 leading-[15px] mt-[20px]'>
                {info.date}
            </div>
        </a>
    </div>
}
