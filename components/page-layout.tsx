'use client';

import { ChevronLeft } from 'lucide-react';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export const PageLayout = ({ children }: React.PropsWithChildren) => {
  const pathname = usePathname();
  const router = useRouter();
  const isEventPage = /\/event\/[a-z0-9]/gi.test(pathname);
  return (
    <main className="flex flex-col font-mono">
      <header className="h-20 w-full p-4 flex justify-between items-center">
        <motion.div layout className="flex items-center gap-4">
          <LayoutGroup>
            <AnimatePresence mode="wait">
              {isEventPage && (
                <motion.span
                  className="cursor-pointer"
                  onClick={() => router.back()}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'keyframes', duration: 0.3 }}
                >
                  <ChevronLeft />
                </motion.span>
              )}
            </AnimatePresence>

            <AnimatePresence>
              <Link href="/">
                <motion.h1
                  layout
                  transition={{ type: 'keyframes' }}
                  className="text-2xl tracking-wide font-bold font-mono "
                >
                  The Newsletter
                </motion.h1>
              </Link>
            </AnimatePresence>
          </LayoutGroup>
        </motion.div>
      </header>
      <div className="flex flex-col justify-center items-center gap-4">{children}</div>
    </main>
  );
};
