import Image from 'next/image';
import type { FC } from 'react';


const BackgroundStripes: FC = () => {
  return (
    <div className="relative w-screen h-screen flex items-start bg-white overflow-hidden">
      <div className="absolute w-screen h-screen flex-col items-center gap-10 p-6">
      <div className="flex flex-col">
          <div className="flex flex-start gap-2.5">
            <div className="w-44 h-5 rounded-2xl bg-green-400"></div>
            <div className="w-8 h-5 rounded-2xl bg-green-400"></div>
            <div className="w-16 h-5 rounded-2xl bg-green-400"></div>
            <div className="w-16 h-5 rounded-2xl bg-green-400"></div>
          </div>
        </div>
        <div className="flex flex-start gap-2">
          <div className="w-16 h-5 rounded-full bg-green-400"></div>
          <div className="w-16 h-5 rounded-full bg-green-400"></div>
          <div className="w-52 h-5 rounded-full bg-green-400"></div>
          <div className="w-5 h-5 rounded-full bg-green-400"></div>
        </div>
        <div className="flex flex-start gap-2">
          <div className="w-5 h-5 rounded-full bg-green-400"></div>
          <div className="w-16 h-5 rounded-full bg-green-400"></div>
          <div className="w-52 h-5 rounded-full bg-green-400"></div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundStripes;