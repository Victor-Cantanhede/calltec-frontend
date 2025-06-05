import { ReactNode } from 'react';
import Image from 'next/image';

export default function LayoutPages({ children }: Readonly<{ children: ReactNode }>) {

    return (
        <main className='h-[100dvh] grid grid-cols-[200px_auto]'>
            <div className='pt-3 flex flex-col items-center bg-gray-950 text-gray-400'>
                <Image src='/logo-branco.png' alt='logo-branco' priority width={70} height={80} style={{ width: '70px', height: '80px' }} />
                <p>TESTE</p>
                <p>TESTE 2</p>
            </div>
            <div className=''>
                <p>Principal</p>
                {children}
            </div>
        </main>
    );
}