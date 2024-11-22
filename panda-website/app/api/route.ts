import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  const data = [
    '/home',
    '/about',
    '/contact',
    '/franchise',
    '/investor',
    '/news',
    '/products',
    '/shop',
  ]
  return NextResponse.json({ data })
}
