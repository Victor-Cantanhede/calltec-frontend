import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '@/styles/globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Call-Tech',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br' className={openSans.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}