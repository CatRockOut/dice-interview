import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Dice Game',
    description: 'Dice Game',
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <AppRouterCacheProvider options={{key: 'css'}}>
            {children}
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
