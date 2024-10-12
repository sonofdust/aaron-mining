import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "MiningCo",
  description: "Leading global mining company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
