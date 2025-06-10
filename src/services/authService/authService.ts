'use server';
import { cookies } from 'next/headers';
import { api } from 'services/api';

interface LoginPayload {
    username: string;
    password: string;
}

export async function login(payload: LoginPayload) {
    try {
        const response = await api.post('/users/login', payload);
        const token: string = response.data.token;

        const cookieStore = await cookies();
        cookieStore.set('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 24 // 1 dia
        });

    } catch (error: any) {
        throw new Error(error?.response?.data?.message || 'Erro ao efetuar login!');        
    }
}