import { NewsLetterEvent } from '@/components/newsletter-event';
import { api } from '@/convex/_generated/api';
import { formatTime } from '@/lib/format-time';
import { fetchQuery } from 'convex/nextjs';

export default async function List() {
  const events = await fetchQuery(api.events.getEvents);

  return (
    <>
      {events.map((n) => {
        return (
          <NewsLetterEvent key={n._id} name={n.name}>
            <NewsLetterEvent.Location
              city={`${n.location.city}, ${n.location.state}`}
              date={new Date(n.date).toLocaleDateString('en-us', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
              time={formatTime(n.time)}
            />
          </NewsLetterEvent>
        );
      })}
    </>
  );
}
