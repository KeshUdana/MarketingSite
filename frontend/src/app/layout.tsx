import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Head from 'next/head';  // Import Head from next/head

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Modde Marketing',
  description: 'We help you grow your business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <Head>
        {/* Google site verification meta tag */}
        <meta name="google-site-verification" content="IPL0B40qZB1CXwzNooV_4gd-VuPkKq2UW2Oh9abwVwQ" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
