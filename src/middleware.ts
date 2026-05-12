import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const secret = new TextEncoder().encode(
    process.env.JWT_SECRET || 'super-secret-key-1234'
)

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Rewrite /reformas-integrales-en-{slug} → /reformas-integrales-en/{slug}
    const cityMatch = pathname.match(/^\/reformas-integrales-en-([a-z-]+)$/);
    if (cityMatch) {
        const url = request.nextUrl.clone();
        url.pathname = `/reformas-integrales-en/${cityMatch[1]}`;
        return NextResponse.rewrite(url);
    }

    if (pathname.startsWith('/admin')) {
        if (request.nextUrl.pathname === '/admin/login') {
            return NextResponse.next()
        }

        const token = request.cookies.get('admin_token')?.value

        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url))
        }

        try {
            await jwtVerify(token, secret)
            return NextResponse.next()
        } catch (err) {
            return NextResponse.redirect(new URL('/admin/login', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*', '/reformas-integrales-en-:slug+'],
}
