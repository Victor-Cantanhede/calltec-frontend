import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';


const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload;

    } catch (error) {
        return null;
    }
}

export async function middleware(req: NextRequest) {

    const token = req.cookies.get('token')?.value;
    if (!token) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    const user = await verifyToken(token);
    if (!user) {
        return NextResponse.redirect(new URL('/', req.url));
    }
    
    const response = NextResponse.next();
    response.cookies.set('user', JSON.stringify(user), {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 // 1 dia
    });

    return response;
}

export const config = {
    matcher: [
        '/dashboard',
        '/dashboard/:path*'
    ]
};