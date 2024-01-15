import { useQuery } from 'convex/react';

import { api } from '@/convex/_generated/api';

export const useEvents = () => {
  return useQuery(api.events.getEvents);
};
