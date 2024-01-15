'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BookOpenText, CalendarDays, List } from 'lucide-react';

import { Button } from './ui/button';

export const ViewPicker = () => {
  const params = useSearchParams();
  return (
    <div className="flex gap-2 w-fit p-4">
      <Button
        asChild
        variant="outline"
        size="icon"
        className={params.get('view') === 'calendar' ? 'bg-accent text-accent-foreground' : ''}
      >
        <Link href={{ pathname: '', query: { view: 'calendar' } }} replace>
          <CalendarDays />
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="icon"
        className={params.get('view') === 'list' ? 'bg-accent text-accent-foreground' : ''}
      >
        <Link href={{ pathname: '', query: { view: 'list' } }} replace>
          <List />
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="icon"
        className={params.get('view') === 'blog' ? 'bg-accent text-accent-foreground' : ''}
      >
        <Link href={{ pathname: '', query: { view: 'blog' } }} replace>
          <BookOpenText />
        </Link>
      </Button>
    </div>
  );
};
