import Link from 'next/link';

export const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="flex flex-col font-mono">
      <header className="h-20 w-full p-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl tracking-wide font-bold font-mono">The Newsletter</h1>
        </Link>
      </header>
      <div className="container flex flex-col mx-auto justify-center items-center p-8 gap-4">
        {children}
      </div>
    </main>
  );
};
