import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title = 'Home' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title} | Nitesh Kumar</title>
      </Head>
      <header className="bg-white-900 text-black py-4">
        <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">Nitesh.dev</Link>
          <div className="space-x-4 font-satoshi">
            <Link href="/blog">Blog</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-6">{children}</main>
      <footer className="text-center text-gray-500 py-6 text-sm text-bottom footer" >
        © {new Date().getFullYear()} Nitesh Kumar. All rights reserved.
      </footer>
    </>
  );
}
