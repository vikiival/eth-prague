import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import Link from 'next/link';
import Head from 'next/head'
import Header from '@/components/Header'

import Image from 'next/image'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import mockPublications from '@/mockData'
import { Publication } from '@/interfaces'

const Home: FC = () => {
	return (
		<div className=" relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
			<Head>
				<title>Medium Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>


			<div className="absolute top-6 left-6">
				<Header />
				
			</div>
			<ThemeSwitcher className="absolute bottom-6 right-6" />
			<div className="container mx-auto p-4">
				<h1 className="text-2xl font-bold mb-4">Publications</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{mockPublications.map((publication: Publication) => (
						<div key={publication.id} className="border rounded-lg overflow-hidden w-60 h-80">
							<div className="relative h-48 w-full	">
								<Image src={publication.image} alt={publication.name} layout="fill" objectFit="cover" />
							</div>
							<div className="p-4">
								<div className="flex justify-between items-center">
									<span className="font-semibold">{publication.name}</span>
									<span>${publication.price.toFixed(2)}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
