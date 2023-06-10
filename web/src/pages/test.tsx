import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';


const Test: FC = () => {
  return (

    <div className="flex flex-col items-center space-y-6">
      <div className="w-ee h-64 relative overflow-hidden rounded-md">
        <Image 
          src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
          alt="Frame 13"

          layout="fill" objectFit="cover"
          
        />
      </div>
      <div className="flex flex-col max-w-2xl items-start">
        <div className="text-base text-[#16392d] font-dela-gothic flex flex-col w-auto h-auto">
          Hallstatt article
        </div>
        <div className="flex justify-between items-center w-auto h-auto">
          <div className="flex items-center space-x-4 w-full h-auto">
            <div className="text-sm font-roboto text-[#16392d] font-bold w-auto h-auto whitespace-nowrap flex flex-col">
              Creator:
              </div>
            <div className="flex items-center space-x-3 w-auto h-auto">
              <div className="w-5 h-5  flex items-center justify-center p-2.5 rounded-xl bg-center bg-no-repeat bg-cover overflow-hidden"
                style={{backgroundImage: `url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg')`}}>
              </div>
              <div className="text-sm text-[#16392d] font-roboto lowercase w-auto h-auto whitespace-nowrap flex flex-col">789OHUGN98JIO</div>
            </div>
          </div>
          <div className="w-auto  font-roboto h-auto px-4 py-1 border-2 border-[#84eda6] rounded-full bg-[#84eda6]">
            <div className="text-sm text-[#16392d] font-roboto w-auto h-auto whitespace-nowrap flex flex-col">View publication</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-2xl w-auto h-auto space-y-6">
          <div className="text-sm text-black font-roboto text-opacity-75">Lorem ipsum dolor sit amet consectetur. Congue risus sit elementum urna facilisis dignissim sem. Id morbi massa sed pretium commodo sit id. Risus auctor diam sed ornare maecenas risus diam integer. A aenean facilisis elit tincidunt imperdiet adipiscing turpis hendrerit.</div>
          <div className="mt-0 text-sm text-black font-roboto text-opacity-75"></div>
          <div className="mt-0 text-sm text-black font-roboto text-opacity-75">Vitae nunc urna nunc et ultricies proin...</div>
          <div className="mt-0 text-sm text-black font-roboto text-opacity-75"></div>
          <div className="mt-0 text-sm text-black font-roboto text-opacity-75">malesuada sed et in magna...</div>
          <div className="mt-0 text-sm text-black font-roboto text-opacity-75">Proin semper vel quam augue augue pharetra vitae...</div>
          <div className="mt-0 text-sm text-black font-roboto text-opacity-75">Morbi nibh ipsum risus nisl eget nisi velit etiam...</div>
          <div className="mt-0 text-sm text-black font-roboto text-opacity-75">Enim placerat eu libero faucibus...</div>
        </div>
    </div>

  );
}

export default Test;