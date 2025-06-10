import { cookies } from 'next/headers';
import { IUser } from 'types/User';

export default async function getUserCookie(): Promise<IUser | undefined> {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get('user')?.value;
    const user: IUser | undefined = userCookie ? JSON.parse(userCookie) : undefined;

    return user;
}