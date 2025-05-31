import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';

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
                {children}
            </body>
        </html>
    );
}
