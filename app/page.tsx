import { ListView } from '@/components/views';

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 items-center justify-center w-full h-[300px] border rounded-md shadow-sm">
        <h1 className="text-3xl text-center md:text-balance font-bold text-black">
          Discover Your Next Adventure
        </h1>
        <p className="text-slate-600 text-lg">Find Events Near You</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-4">
        <ListView />
      </div>
    </div>
  );
}
