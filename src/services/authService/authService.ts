import { api } from 'services/api';

interface LoginPayload {
    username: string;
    password: string;
}

export async function login(payload: LoginPayload) {
    try {
        const response = await api.post('/users/login', payload);
        return response.data;

    } catch (error: any) {
        throw new Error(error?.response?.data?.message || 'Erro ao efetuar login!');        
    }
}