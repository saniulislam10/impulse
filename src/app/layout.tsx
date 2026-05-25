import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Impulse Group | Nurturing Growth, Delivering Excellence',
  description: 'Impulse Group is a multi-brand conglomerate dedicated to excellence across Just Natural, Impulse Solutions, and KKS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-background-light dark:bg-background-dark font-display text-[#121716] dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
