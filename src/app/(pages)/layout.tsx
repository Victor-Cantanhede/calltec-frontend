import { ReactNode } from 'react';
import { FiUser } from 'react-icons/fi';
import Image from 'next/image';
import getUserCookie from 'utils/getUserCookie';
import { routes } from 'app/routes/routes';
import Link from 'next/link';


export default async function LayoutPages({ children }: Readonly<{ children: ReactNode }>) {
    const user = await getUserCookie();

    return (
        <main className='h-[100dvh] flex flex-col'>

            <header className='pl-5 pr-5 pt-[15px] pb-[15px] relative flex justify-between items-center bg-blue-800 text-white'>

                <h2 className='text-[1rem] font-bold'>Olá {user?.name.split(' ')[0]}!</h2>

                <div className='absolute left-1/2 -translate-x-1/2 flex-grow flex justify-center'>
                    <Image src='/logo-branco.png' alt='logo-branco' priority width={50} height={60} style={{ width: '50px', height: '60px' }} />
                </div>

                <div className='p-[2px] pl-2 border border-gray-400 rounded-full flex items-center gap-2 cursor-pointer'>

                    <p className='text-[0.8rem]'>
                        {
                            user?.accesslevel === 3 ? 'Administrador' :
                            user?.accesslevel === 2 ? 'Técnico' :
                            user?.accesslevel === 1 ? 'Usuário' : 'Perfil inválido!'
                        }
                    </p>

                    <span className='p-1.5 rounded-full flex justify-center items-center text-[1.2rem] bg-blue-600'><FiUser /></span>

                </div>

            </header>

            <div className='flex-grow grid grid-cols-[200px_auto] bg-[whitesmoke]'>

                <div className='pt-3 flex flex-col items-center bg-white text-gray-400'>

                    <nav>
                        {routes.map((route) => (user && user.accesslevel)
                            ? route.accesslevel.includes(user.accesslevel)
                                ? 
                                    <ul key={route.id}>

                                        <h3 className='font-bold'>{route.title}</h3>

                                        {route.subroutes.map((option) =>
                                            <li key={option.id}>
                                                <Link href={option.href}>{option.title}</Link>
                                            </li>
                                        )}
                                    </ul>
                                : null
                            : null
                        )}
                    </nav>

                </div>

                <div className=''>
                    <p>Principal</p>
                    {children}
                </div>

            </div>
        </main>        
    );
}