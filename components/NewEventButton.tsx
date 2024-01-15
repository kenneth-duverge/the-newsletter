'use client';

import { useState } from 'react';
import { EventForm } from './EventForm';

export const NewEventButton = ({ children = 'New event' }: React.PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="p-4 hover:bg-slate-700 h-auto rounded-md bg-slate-900 text-white"
        onClick={() => setOpen((p) => !p)}
      >
        {children}
      </button>
      {open && (
        <div className="absolute bg-white right-4 top-20 w-[400px] border p-4 h-fit rounded-md shadow-sm">
          <EventForm />
        </div>
      )}
    </>
  );
};
