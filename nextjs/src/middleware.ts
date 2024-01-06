import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Negotiator from 'negotiator'
// import { NextRequest, NextResponse } from "next/server"

const languages = ['en', 'hi', 'fr'];
const videoRegex = /\.(mp4|3gp|ogg|wmv|webm|flv|avi*|wav|vob*)$/i;
const imageRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i;

export default function HandleRequest(req: NextRequest) {
    //custom matcher
    //avoid audio 
    //avoid video
    if (req.url.match(imageRegex) || req.url.match(videoRegex)) return;

    const accept = req.headers.get('accept-language') || undefined;
    const headers = { 'accept-language': accept }
    const negotiator = new Negotiator({ headers });
    // console.log(negotiator.language(languages));
    const prefereedLanguage = negotiator.language(languages)

    // console.log(lngHeader)
    const pathName = req.nextUrl.pathname;
    const isLanguage = languages.some(lng => pathName.startsWith(`/${lng}/`) || pathName == `/${lng}`)
    if (isLanguage) return;
    const newUrl = new URL(`/${prefereedLanguage}/${req.nextUrl.pathname}`, req.nextUrl.origin)
    return NextResponse.redirect(newUrl);
    //custom matcher
    // if (req.nextUrl.pathname == "/about") {
    //     //1st way 
    //     // req.nextUrl.pathname = '/en';
    //     // return NextResponse.redirect(req.nextUrl)

    //     //2nd way
    //     // const newURL = new URL('en', req.nextUrl.origin)
    //     // return NextResponse.redirect(newURL);
    // }
    // console.log(req.nextUrl)
    // console.log(req.url)
}
export const config = {
    // matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)"
}
// export const config =


// export function middleware(request: NextRequest) {
//     // const Headers = request.headers;
//     // const availableLanguages = ['en', 'hi', 'fr']
//     // let headers = { 'accept-language': 'en-US,en;q=0.5' }
//     // const negotiator = new Negotiator({ headers })
//     // console.log(negotiator.languages())
//     // const acceptLngHeader = request.headers.get('accept-language');
//     // console.log(acceptLngHeader)
//     // const negotiator = new Negotiator({ 'accept-language': acceptLngHeader });
//     const acceptLngHeader = request.headers.get('accept-language');
//     if (!acceptLngHeader) return;
//     // Create a negotiator instance with the 'accept-language' header
//     // const negotiator = new Negotiator({ 'accept-language': acceptLngHeader })?.languages();
//     // console.log(negotiator)
//     // console.log(request.headers)
//     // console.log(JSON.stringify(request.headers), JSON.stringify(request))

//     // console.log(request.headers)
//     const { pathname } = request.nextUrl
//     // if(pathname.h)
//     // const pathnameHasLocale = locales.some(
//     //   (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//     // )
//     const pathNameHasLang = languages.some(lng => pathname.startsWith(`/${lng}`) || pathname === `/${lng}`)
//     // console.log(pathname, pathNameHasLang)
//     if (pathNameHasLang) return;

//     // Redirect if there is no locale
//     request.nextUrl.pathname = `/${defaultLng}${pathname}`
//     return Response.redirect(request.nextUrl)
// }

// export const config = {
//     matcher: [
//         // Skip all internal paths (_next)
//         '/((?!api|_next/static|_next/image|favicon.ico).*)',
//         // '/((?!_next).*)',
//         // Optional: only run on root (/) URL
//         // '/'
//     ],
// }

// export default function middleware(request) {
//     // console.log(req)
//     //req.url
//     //req.nextUrl
//     // console.log(req.url) //simple url
//     // console.log(req.nextUrl) URL object
//     // console.log(req.url)
//     // console.log(new URL('/home', req.url))
//     // if (request.nextUrl.pathname.startsWith('/en')) {
//     //     console.log(request.nextUrl)
//     //     return NextResponse.rewrite(new URL('/about-2', request.url))
//     // }
// }

// export const config = {
//     matcher: '/about/:path*',
//   }