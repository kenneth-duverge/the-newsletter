'use client';

import { useSearchParams } from 'next/navigation';

import { useEvents } from '@/hooks/use-events';
import { ListView } from './views/list';
import { CalendarView } from './views/calendar';
import { BlogView } from './views/blog';

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
