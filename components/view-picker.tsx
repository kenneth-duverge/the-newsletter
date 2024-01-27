'use client';

import { BookOpenText, CalendarDays, List } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from './ui/button';

interface LinkButtonProps {
  className?: string;
  href: string;
  active: boolean;
}

const LinkButton = ({
  children,
  href,
  className = '',
  active,
}: React.PropsWithChildren<LinkButtonProps>) => {
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className={`${className} ${active ? 'bg-accent text-accent-foreground' : ''}`}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export const ViewPicker = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-2 w-fit p-4">
      <LinkButton href="/calendar" active={pathname.includes('calendar')}>
        <CalendarDays />
      </LinkButton>
      <LinkButton href="/list" active={pathname.includes('list')}>
        <List />
      </LinkButton>
      <LinkButton href="/blog" active={pathname.includes('blog')}>
        <BookOpenText />
      </LinkButton>
    </nav>
  );
};
