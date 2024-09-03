import { ListView } from '@/components/views';

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 items-center justify-center w-full h-[450px]">
        <h1 className="text-3xl text-center md:text-balance font-bold text-black">
          Discover Your Next Adventure
        </h1>
        <p className="text-slate-600 text-lg">Find Events Near You</p>
      </div>
      <div className="pl-8 mt-16 h-screen flex flex-col gap-12">
        <h2 className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, error.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ListView />
        </div>
      </div>
    </div>
  );
}
