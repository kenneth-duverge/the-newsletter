'use client';

import { useMutation } from 'convex/react';

import { api } from '@/convex/_generated/api';

import { NewsLetterEvent } from '@/components/newsletter-event';
import { useToast } from '@/components/ui/use-toast';
import { NewEventButton } from '@/components/new-event-button';

import { useEvents } from '@/hooks/use-events';

import { formatTime } from '@/lib/format-time';
import Image from 'next/image';
import Link from 'next/link';

export const ListView = () => {
  const { toast } = useToast();
  const data = useEvents();
  const deleteEvent = useMutation(api.events.deleteEvent);

  if (data === undefined) {
    return Array.from({ length: 2 }).map((_, i) => (
      <div key={i} className="border w-full h-[300px] rounded-md p-2 relative">
        <div className="bg-slate-100 w-full h-full bg-blend-multiply rounded-md overflow-hidden relative"></div>
      </div>
    ));
  }

  if (data.length === 0) {
    return (
      <div className="h-[50vh] -pt-40 flex flex-col gap-8 justify-center ">
        <h1 className="text-2xl font-mono text-slate-800">No scheduled events</h1>
        <NewEventButton>Create a new event</NewEventButton>
      </div>
    );
  }

  return (
    <>
      {data.map((n) => {
        return (
          <Link key={n._id} href={`/event/${n._id}`}>
            <div className="border w-full h-[300px] rounded-md p-2 relative">
              <div className="bg-slate-100 w-full h-full bg-blend-multiply rounded-md overflow-hidden relative">
                <Image
                  fill
                  className="object-cover"
                  src="https://picsum.photos/seed/picsum/417/282"
                  alt="placeholder-image"
                />
                <div className="absolute inset-0 rounded-md bg-gradient-to-br from-black to-transparent">
                  <p className="absolute left-6 top-6 text-white text-xl">{n.name}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
