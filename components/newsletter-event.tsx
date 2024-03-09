'use client';

import { MoreHorizontal } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import Image from 'next/image';

export const NewsLetterEvent = ({
  children,
  name,
  onDelete,
}: React.PropsWithChildren<{ onDelete?: VoidFunction; name: string }>) => {
  return (
    <div className="w-auto h-[200px] relative font-mono border rounded-md p-4 flex flex-col justify-between">
      <div className="w-full flex h-full justify-between items-start">
        <div className="flex gap-4 h-full w-full">
          <div className="w-56 h-full overflow-hidden rounded-md bg-slate-200">
            <Image
              width={224}
              height={166}
              className="object-cover"
              src="https://picsum.photos/seed/picsum/224/166"
              alt="placeholder-image"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-lg">{name}</h1>
            {/* <p className="truncate w-full max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perferendis
              debitis sapiente aliquam aliquid excepturi.
            </p> */}
          </div>
        </div>
        <div className="w-[100px] flex h-full gap-2 justify-end items-start">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreHorizontal />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={onDelete}>Book</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onDelete}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

interface EventLocation {
  city: string;
  date: string;
  time: string;
}

const Location = ({ city, date, time }: EventLocation) => {
  return (
    <div className="flex flex-col gap-1 text-slate-600">
      <p>
        <span></span>
        {/* {city} */}
      </p>
      {/* <p>{date}</p> */}
      {/* <p>{time || '8 PM'}</p> */}
    </div>
  );
};

NewsLetterEvent.Location = Location;
