'use client';

import { useMutation, useQuery } from 'convex/react';

import { api } from '../convex/_generated/api';
import { Event } from './Event';
import { NewEventButton } from './NewEventButton';
import { useToast } from './ui/use-toast';

function formatTime(time: string) {
  // Parse the input time string
  const [h, m] = time.split(':');

  const hours = Number(h);
  const minutes = Number(m);

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Determine whether it's AM or PM
  const period = hours >= 12 ? 'PM' : 'AM';

  // Create the formatted time string
  const formattedTime =
    minutes > 0 ? `${formattedHours}:${minutes} ${period}` : `${formattedHours} ${period}`;

  return formattedTime;
}

export const Newsletter = () => {
  const { toast } = useToast();
  const data = useQuery(api.events.getEvents);
  const deleteEvent = useMutation(api.events.deleteEvent);

  return (
    <>
      {data && data.length > 0 ? (
        data.map((n) => {
          return (
            <Event
              key={n._id}
              name={n.name}
              onDelete={async () => {
                await deleteEvent({ id: n._id });
                toast({ title: 'Event deleted successfully' });
              }}
            >
              <Event.Location
                city={`${n.location.city}, ${n.location.state}`}
                date={new Date(n.date).toLocaleDateString('en-us', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}
                time={formatTime(n.time)}
              />
            </Event>
          );
        })
      ) : (
        <div className="h-[50vh] -pt-40 flex flex-col gap-8 justify-center ">
          <h1 className="text-2xl font-mono text-slate-800">No scheduled events</h1>
          <NewEventButton>Create a new event</NewEventButton>
        </div>
      )}
    </>
  );
};
