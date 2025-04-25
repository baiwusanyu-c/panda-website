import { NextResponse } from 'next/server';

export type ListingDocsInfo  = Array<{
  link: string;
  date?: string,
  title: string
  subTitle?: string
}>
export async function POST() {
  const data = [
    {
      link: "https://docs.github.com/",
      date: '2024-04-15',
      title: '全球发售'
    }
  ]
  return NextResponse.json({ data })
}
