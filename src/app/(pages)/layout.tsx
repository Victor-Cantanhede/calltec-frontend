import { ReactNode } from 'react';

export default function LayoutPages({ children }: Readonly<{ children: ReactNode }>) {

    return (
        <>
            <h1>LAYOUT</h1>
            {children}
        </>
    );
}