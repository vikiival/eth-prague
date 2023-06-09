import React from 'react';
import Link from "next/link";
import ConnectWallet from '@/components/ConnectWallet'

function Header() {
  return (
    <header className='flex justify-between p-5 mx-auto '>
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="" />
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
            </div>
        </div>

        <div className="flex items-center space-x-5 text-green-600">
            <ConnectWallet />
        </div>
    </header>
  )
}

export default Header