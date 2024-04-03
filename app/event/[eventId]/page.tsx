import { ConvexHttpClient } from 'convex/browser';

import { CalendarPlus } from 'lucide-react';
import { api } from '../../../convex/_generated/api';
import { Id } from '../../../convex/_generated/dataModel';
import Image from 'next/image';

const httpClient = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default async function EventPage({ params }: { params: { eventId: string } }) {
  const data = await httpClient.query(api.events.getEvent, { id: params.eventId as Id<'events'> });
  return (
    <div className="w-full h-full">
      <div className="container mx-auto p-4">
        <div className="flex md:flex-row flex-col gap-10">
          <div className="bg-slate-100 rounded-md flex-1 h-[300px] md:h-[400px] overflow-hidden">
            <Image
              width={525}
              height={400}
              className="object-fill w-full h-[300px] md:h-full"
              src="https://picsum.photos/seed/picsum/600/400?grayscale"
              alt="placeholder-image"
            />
          </div>

          <div className="flex flex-col gap-4 flex-1 p-4">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold">{data?.name}</h1>
              <button className="cursor-pointer md:-translate-x-10">
                <CalendarPlus />
              </button>
            </div>
            <div className="flex flex-col gap-4 text-slate-500">
              <p className="flex gap-2 items-center">
                <span className="text-sm">📍</span>
                <span>
                  {data?.location.city}, {data?.location.state}
                </span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-sm">📆</span>
                <span>{new Date(data?.date || '').toDateString()}</span>
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-sm">⏰</span>
                <span>{data?.time}</span>
              </p>
            </div>
            <p className="text-base text-balance tracking-wide leading-relaxed mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit optio eius
              repudiandae. Sunt aperiam maxime saepe distinctio ullam ipsam. Modi. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Non, saepe!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
