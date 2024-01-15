import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';
import ConvexClientProvider from '@/components/ConvexClientProvider';
import { PageLayout } from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Newsletter',
  description: 'Newsletter app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <ConvexClientProvider>
          <PageLayout>{children}</PageLayout>
        </ConvexClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
