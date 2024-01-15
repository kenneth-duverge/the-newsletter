'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BookOpenText, CalendarDays, List } from 'lucide-react';

import { Button } from './ui/button';

const LinkButton = ({
  children,
  to,
  className,
}: React.PropsWithChildren<{ className: string; to: 'calendar' | 'list' | 'blog' }>) => {
  return (
    <Button asChild variant="outline" size="icon" className={className}>
      <Link href={{ pathname: '', query: { view: to } }} replace>
        {children}
      </Link>
    </Button>
  );
};

export const ViewPicker = () => {
  const params = useSearchParams();
  return (
    <div className="flex gap-2 w-fit p-4">
      <LinkButton
        to="calendar"
        className={
          params.get('view') === 'calendar' || params.get('view') === null
            ? 'bg-accent text-accent-foreground'
            : ''
        }
      >
        <CalendarDays />
      </LinkButton>
      <LinkButton
        to="list"
        className={params.get('view') === 'list' ? 'bg-accent text-accent-foreground' : ''}
      >
        <List />
      </LinkButton>
      <LinkButton
        to="blog"
        className={params.get('view') === 'blog' ? 'bg-accent text-accent-foreground' : ''}
      >
        <BookOpenText />
      </LinkButton>
    </div>
  );
};
