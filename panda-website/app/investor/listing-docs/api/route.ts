import { NextResponse } from 'next/server';

export interface ListingDocsInfo {
 link: string;
}
export async function POST() {
  const data = {
    link: "https://docs.github.com/",
  }
  return NextResponse.json({ data })
}
