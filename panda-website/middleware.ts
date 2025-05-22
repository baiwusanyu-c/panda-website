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
  const lang = (request.headers.get('x-custom-lang') || 'ev') as 'en' | 'zh'
  // 检测是否包含 token
  const token = request.cookies.get('token')?.value
  const id = request.cookies.get('user_id')?.value

  if (!token) {
    return NextResponse.redirect(genErrorsURL('Empty token request, please login again', request.url))
  }

  // 调取后端权限接口，
  const res = await fetch(`${BASE_URL}/permission/user-menu-permission`, {
    method: "post",
    body: JSON.stringify({ id, menuPath: pathname }),
    headers: genHeaders({ token }, lang),
  });

  const permissionData = (await res.json());
  if(permissionData.code !== 200) {
    return NextResponse.redirect(genErrorsURL(permissionData.message, request.url))
  }
  const { data: permissionInfo } = permissionData
  // 校验页面权限列表
  if(!permissionInfo.hasPermission) {
    return NextResponse.redirect(genErrorsURL(permissionData.message, request.url))
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

function genErrorsURL(message: string, url: string) {
  const urlInstance = new URL('/error', url);
  urlInstance.searchParams.set('message', message)
  return urlInstance
}
