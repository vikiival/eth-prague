import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';


const Test: FC = () => {
  return (
<div className="relative w-screen min-h-screen bg-white overflow-hidden flex items-start">
      <div className="absolute w-full min-h-screen flex flex-col items-center gap-10 p-6">

        <div className="flex flex-col items-end gap-6">
          <div className="flex flex-col items-start gap-6">
            <div className="w-132 h-72 flex items-center justify-center p-2.5 rounded-md overflow-hidden">
              <Image 
              src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
              alt="Frame 13"
              width={600}
							height={600}
              className="rounded-full"
              
              />
            </div>
            <div className="text-black font-dela-gothic font-bold text-2xl w-130">
              Hallstatt article
            </div>
            <div className="flex justify-between items-center w-132">
              <div className="flex items-center gap-4">
                <div className="text-green-700 font-normal text-lg">
                  Creator:
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-green-700 font-normal text-lg lowercase">
                    789OHUGN98JIO
                  </div>
                </div>
              </div>
              <div className="px-8.5 py-2.5 border-2 border-green-400 rounded-full bg-green-400">
                <Link href="/publication">
                  <a className="text-black font-rubik font-bold text-lg">
                    View publication
                  </a>
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <p>
                Lorem ipsum dolor sit amet consectetur. Congue risus sit elementum urna facilisis dignissim sem. Id morbi massa sed pretium commodo sit id. Risus auctor diam sed ornare maecenas risus diam integer. A aenean facilisis elit tincidunt imperdiet adipiscing turpis hendrerit.

                Vitae nunc urna nunc et ultricies proin. Sed sed habitant pellentesque amet. Proin dolor eget ridiculus nec. Sit interdum tortor et non ut in purus nec. Eget neque et ut in faucibus. Pulvinar sit in in posuere et velit habitant. Est a in fermentum nibh interdum urna ultrices scelerisque. Fermentum rhoncus mi 

                malesuada sed et in magna. Tincidunt quis urna odio amet odio. Ac sagittis neque nunc quam dui. Sed sed leo et facilisis sit arcu.
                Proin semper vel quam augue augue pharetra vitae. Sed a nibh ut auctor eu velit. Turpis ullamcorper ac nisi imperdiet tellus porttitor tellus lacinia et. Nibh at purus in dolor elit bibendum. Imperdiet faucibus duis mi sapien consequat viverra condimentum tempor velit. Ut lorem et orci ut id vitae. Id adipiscing vitae leo et enim magna volutpat. Duis odio pulvinar ornare in quis. Cras felis quis vulputate praesent nisi arcu sed adipiscing. Sagittis libero faucibus cursus mattis venenatis semper id cursus cursus. Leo integer phasellus nullam vivamus semper vel. Euismod eu tristique cursus ullamcorper metus felis.
                Morbi nibh ipsum risus nisl eget nisi velit etiam. Quam odio et lectus at tincidunt habitant viverra. Aliquam mauris pulvinar sed amet nulla egestas. Lorem ac viverra a pellentesque sit sit sed est in. Mi nisi magna id ultrices id ipsum. Dignissim cursus pellentesque at in massa urna duis eget consectetur. Magna nec molestie sociis proin molestie. Sociis dui at a tristique tincidunt.
                Enim placerat eu libero faucibus. Facilisis et egestas viverra proin. Diam nunc rhoncus ullamcorper nisi neque. Quam urna parturient fringilla elit. Nulla amet accumsan quis proin at facilisis commodo amet. Consectetur eget diam vel integer mi ac pellentesque nisi. Faucibus gravida viverra ut arcu id vulputate id.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>

  );
}

export default Test;