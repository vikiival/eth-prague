import React from 'react';
import Link from "next/link";
import ConnectWallet from '@/components/ConnectWallet'

import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <nav className=" w-full flex items-center justify-between p-6 bg-white shadow">
      <div className="text-2xl font-dela-gothic text-black" >
        <Link href="/">
          <a>Quire</a>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/browse">
          <a className="text-black">Browse</a>
        </Link>

        <ConnectWallet />
      </div>
    </nav>
  );
}
