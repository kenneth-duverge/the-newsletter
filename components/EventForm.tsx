'use client';

import React, { useRef } from 'react';
import { useMutation } from 'convex/react';

import { api } from '@/convex/_generated/api';

import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const EventForm = () => {
  const { toast } = useToast();
  const createEvent = useMutation(api.events.createEvent);
  const [date, setDate] = React.useState<Date>();
  const formRef = useRef<React.ElementRef<'form'>>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);

    const event = {
      name: formData.get('event-name') as string,
      description: formData.get('event-description') as string,
      // Update location with a real location
      location: {
        city: 'Brooklyn',
        state: 'NY',
      },
      date: date?.toString() ?? '',
      time: formData.get('event-time') as string,
    };

    await createEvent(event);
    toast({ title: 'Event created successfully' });
    formRef.current?.reset();
    setDate(undefined);
  };
  return (
    <>
      <h1 className="text-lg font-medium mb-4">New event</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input required placeholder="Name" name="event-name" className="w-full" />
        <Input required placeholder="Location" name="event-location" className="w-full" />
        <div className="flex gap-2">
          <DatePicker date={date} setDate={setDate} />
          <Input required name="event-time" type="time" />
        </div>
        <Textarea required placeholder="Description" name="event-description" className="w-full" />
        <Button type="submit">Save</Button>
      </form>
    </>
  );
};
