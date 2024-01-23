'use client';

import { useSearchParams } from 'next/navigation';

import { useEvents } from '@/hooks/use-events';
import { ListView } from './views/list';

const VIEWS: Record<string, any> = {
  list: ListView,
};

export const Newsletter = () => {
  useEvents();
  const params = useSearchParams();

  const View = VIEWS[params.get('view') || ''] || '';

  return <View />;
};
