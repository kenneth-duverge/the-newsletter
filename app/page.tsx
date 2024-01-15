import { Header } from '@/components/Header';
import { Newsletter } from '@/components/Newsletter';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="container flex flex-col mx-auto justify-center items-center p-8 gap-4">
        <Newsletter />
      </div>
    </main>
  );
}
