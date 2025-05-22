import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {BASE_URL, genHeaders} from "@/utils";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // 排除 API 路径
  const pathname = request.nextUrl.pathname
  if (pathname.startsWith('/investor/listing-docs/api')) {
    return NextResponse.next()
  }
  // 检测是否包含 token
  const token = request.cookies.get('token')?.value
  const id = request.cookies.get('user_id')?.value
  if (!token) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  // 调取后端权限接口，
  const lang = (request.headers.get('x-custom-lang') || 'ev') as 'en' | 'zh'
  const res = await fetch(`${BASE_URL}/user/getUser`, {
    method: "post",
    body: JSON.stringify({ id }),
    headers: genHeaders({ token }, lang),
  });

  const userInfoData = (await res.json());
  if(userInfoData.code !== 200) {
    return NextResponse.redirect(new URL('/home', request.url))
  }
  const { data: userInfo } = userInfoData
  // TODO 校验 页面权限列表
  if(userInfo.permissions && userInfo.permissions.length > 0) {

  }


  return  NextResponse.next()

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/investor/listing-docs/:path*',
    '/pdf-upload/:path*',
  ],
}
