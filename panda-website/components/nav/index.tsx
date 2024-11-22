// TODO: 接口返回
import { Button } from 'antd';

export interface PandaNavProps {
  list: string[]
}


export default async function PandaNav(props: PandaNavProps) {
  console.log(props.list)
  return (
    <div className='pf-medium-15'>
      {(props.list || []).map((post) => (
        <li key={post}>{post}</li>
      ))}
    </div>
  );
}
