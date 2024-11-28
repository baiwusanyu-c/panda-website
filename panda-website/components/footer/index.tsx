export function PandaFooter({
children,
}: Readonly<{
  children?: React.ReactNode;
}>){
  return <footer>
    { children ? children : <></> }
    <div className='h-[130px] bg-cbd-brand-5 w-full'>

    </div>
  </footer>
}
