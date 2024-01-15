import { NewEventButton } from './new-event-button';

export const Header = () => {
  return (
    <header className="h-20 w-full p-4 flex justify-between items-center">
      <h1 className="text-2xl tracking-wide font-bold font-mono">The Newsletter</h1>
      <NewEventButton />
    </header>
  );
};
