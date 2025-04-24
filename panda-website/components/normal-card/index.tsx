export function NormalCard (props: {  children: React.ReactNode }) {
  return <div
    className='w-full h-[164px] bg-cbd-gray-2 px-[20px] py-[28px] rounded-tr-[20px] rounded-bl-[20px]'>
    { props.children}
  </div>
}
