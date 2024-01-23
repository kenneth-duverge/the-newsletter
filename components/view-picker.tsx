'use client';

import { BookOpenText, CalendarDays, List } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from './ui/button';

const LinkButton = ({
  children,
  to,
  className,
}: React.PropsWithChildren<{ className: string; to: 'calendar' | 'list' | 'blog' }>) => {
  return (
    <Button asChild variant="outline" size="icon" className={className}>
      <Link href={`/${to}`}>{children}</Link>
    </Button>
  );
};

export const ViewPicker = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-2 w-fit p-4">
      <LinkButton
        to="calendar"
        className={
          pathname.includes('calendar') || pathname === '' ? 'bg-accent text-accent-foreground' : ''
        }
      >
        <CalendarDays />
      </LinkButton>
      <LinkButton
        to="list"
        className={pathname.includes('list') ? 'bg-accent text-accent-foreground' : ''}
      >
        <List />
      </LinkButton>
      <LinkButton
        to="blog"
        className={pathname.includes('blog') ? 'bg-accent text-accent-foreground' : ''}
      >
        <BookOpenText />
      </LinkButton>
    </div>
  );
};
