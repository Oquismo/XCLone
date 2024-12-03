import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export async function GET (request : NextRequest){

    const requestUrl = new URL(request.url)

    const code = requestUrl.searchParams.get('code')
    // plataforma web

    if (code){

        const supabase = createRouteHandlerClient({cookies})
        await supabase.auth.exchangeCodeForSession(code)
        // usando el codigo que le hemos pasado por la URL
        // nos devuelve la session del usuario
    }
  return NextResponse.redirect(requestUrl.origin)
//   podemos redirigir al usuario a la pagina que estaba usando requestURL

}