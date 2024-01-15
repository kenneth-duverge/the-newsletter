import { Header } from './Header';
import { ViewPicker } from './ViewPicker';

export const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="flex flex-col font-mono">
      <Header />
      <div className="container flex flex-col mx-auto justify-center items-center p-8 gap-4">
        <div className="flex justify-end w-full">
          <ViewPicker />
        </div>
        {children}
      </div>
    </main>
  );
};
