import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabse = createMiddlewareSupabaseClient({req, res})
  const {
    data: { session },
  } = await supabse.auth.getSession()
  console.log(session)
  if(!session && req.nextUrl.pathname.startsWith('/auth/todo-crud')) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/auth'
    return NextResponse.redirect(redirectUrl)
  }
  // if (session && req.nextUrl.pathname.startsWith('/auth')) {
  //   const redirectUrl = req.nextUrl.clone()
  //   redirectUrl.pathname = '/auth/todo-crud'
  //   return NextResponse.redirect(redirectUrl)
  // }
  return res
}
