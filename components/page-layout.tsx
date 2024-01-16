import { NewEventButton } from './new-event-button';
import { ViewPicker } from './view-picker';

export const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="flex flex-col font-mono">
      <header className="h-20 w-full p-4 flex justify-between items-center">
        <h1 className="text-2xl tracking-wide font-bold font-mono">The Newsletter</h1>
        <NewEventButton />
      </header>
      <div className="container flex flex-col mx-auto justify-center items-center p-8 gap-4">
        <div className="flex justify-end w-full">
          <ViewPicker />
        </div>
        {children}
      </div>
    </main>
  );
};
