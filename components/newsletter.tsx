'use client';

import { useSearchParams } from 'next/navigation';

import { useEvents } from '@/hooks/use-events';
import { BlogView, CalendarView, ListView } from '@/components/views';

const VIEWS: Record<string, any> = {
  list: ListView,
  calendar: CalendarView,
  blog: BlogView,
};

export const Newsletter = () => {
  useEvents();
  const params = useSearchParams();

  const View = VIEWS[params.get('view') || ''] || CalendarView;

  return <View />;
};
