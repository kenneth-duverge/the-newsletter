'use client';

import { NewEventButton } from '@/components/new-event-button';
import { ViewPicker } from '@/components/view-picker';
import { SignInButton } from '@clerk/clerk-react';

export const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="flex flex-col font-mono">
      <header className="h-20 w-full p-4 flex justify-between items-center">
        <h1 className="text-2xl tracking-wide font-bold font-mono">The Newsletter</h1>
        <div className='flex gap-4'>
          <NewEventButton />
          <SignInButton mode="modal" />
        </div>
      </header>
      <div className="container flex flex-col mx-auto justify-center items-center p-8 gap-4">
        <div className="flex justify-end w-full">
          <ViewPicker />
        </div>
        {children}
      </div>
    </main>
  );
};
