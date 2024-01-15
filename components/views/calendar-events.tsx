import { useMutation } from 'convex/react';

import { api } from '@/convex/_generated/api';

import { useEvents } from '@/hooks/use-events';

import { Event } from '../Event';
import { useToast } from '../ui/use-toast';
import { NewEventButton } from '../NewEventButton';
import { formatTime } from '@/lib/format-time';

export const CalendarEventsView = () => {
  const { toast } = useToast();
  const data = useEvents();
  const deleteEvent = useMutation(api.events.deleteEvent);

  if (data === undefined) {
    return <p>Loading...</p>;
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
      })}
    </>
  );
};
