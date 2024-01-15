'use client';

import { useSearchParams } from 'next/navigation';

import { useEvents } from '@/hooks/use-events';
import { CalendarEventsView } from './views/calendar-events';

const VIEWS: Record<string, any> = {
  calendar: CalendarEventsView,
  list: () => <p>List view</p>,
  blog: () => <p>Blog view</p>,
};

const DefaultView = () => <p>Nothing to show</p>;

export const Newsletter = () => {
  useEvents();
  const params = useSearchParams();

  const View = VIEWS[params.get('view') || ''] || DefaultView;

  return <View />;
};
