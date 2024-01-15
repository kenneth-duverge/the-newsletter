'use client';

export const Event = ({
  children,
  name,
  onDelete,
}: React.PropsWithChildren<{ onDelete: VoidFunction; name: string }>) => {
  return (
    <div className="w-[500px] h-[200px] font-mono border rounded-md p-4 flex flex-col justify-between">
      <div className="w-full flex justify-between">
        <h1 className="font-bold text-lg">{name}</h1>

        <button onClick={onDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-between gap-4 items-end">
        {children}
        <a href="" className="flex gap-2 items-end h-fit group">
          Learn more{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 group-hover:translate-x-[6px] transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
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
      <p>{city}</p>
      <p>{date}</p>
      <p>{time || '8 PM'}</p>
    </div>
  );
};

Event.Location = Location;
