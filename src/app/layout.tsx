import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/app/(components)/header';
import { Footer } from '@/app/(components)/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'EmpowerHER',
  description: 'Empowering communities through learning and connection.',
  icons: {
    icon: 'https://ik.imagekit.io/rmlbayysp/1750519855470-ChatGPT_Image_Jun_21__2025__11_23_41_PM-removebg-preview_bWCGGUBkC.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
