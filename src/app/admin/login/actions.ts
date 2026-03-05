'use server'

import { cookies } from 'next/headers'
import { SignJWT } from 'jose'

const secret = new TextEncoder().encode(
    process.env.JWT_SECRET || 'super-secret-key-1234'
)

export async function loginAction(formData: FormData) {
    const user = formData.get('user')
    const pass = formData.get('pass')

    if (user === 'Sergio' && pass === 'Valerossi#7v') {
        const token = await new SignJWT({ user: 'Sergio' })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('24h')
            .sign(secret)

        const cookieStore = await cookies()
        cookieStore.set('admin_token', token, {
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
        })

        return { success: true }
    } else {
        return { error: 'Credenciales incorrectas' }
    }
}
