import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReduxProvider } from '@/redux';
import './globals.css';
import { Toast } from '@heroui/react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'InInterview',
  description: 'Help to improve your hard skill. Learn something new. Show your expertise',
};

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<IProps>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-background-tertiary">
        <NextIntlClientProvider>
          <ReduxProvider>
            {children}
            <Toast.Provider placement={"top end"} />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
