import {NextResponse} from 'next/server';

export interface MenuItem {
  name: string;
  nameEn: string;
  icon?: string;
  path: string;
  parentId?: string;
  children?: MenuItem[];
  id: string;
}

export interface BasicInfo {
  links: MenuItem[]
}
export async function POST() {
  const data = {
    links: [],
  }

  const res = await fetch('http://localhost:8084/menu/getTreeMenus', { method: 'post' });
  data.links = (await res.json()).data

  return NextResponse.json({ data })
}
