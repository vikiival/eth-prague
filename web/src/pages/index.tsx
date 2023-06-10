import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'

import Link from 'next/link'
import Head from 'next/head'
import Header from '@/components/Header'

import Image from 'next/image'
import ConnectWallet from '@/components/ConnectWallet'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import mockPublications from '@/mockData/mockPub'
import { Publication } from '@/interfaces'

const Home: FC = () => {
	return (
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
			<div className="w-full absolute top-0">
				<Header />
			</div>

			<ThemeSwitcher className="absolute bottom-6 right-6" />
			<div className="container mx-auto p-4">
				<h1 className="text-2xl font-bold mb-4">Publications</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{mockPublications.map((publication: Publication) => (
						<Link key={publication.id} href={`/house/${publication.id}`}>
							<a key={publication.id} className="border rounded-lg overflow-hidden w-60 h-80">
								<div className="relative h-48 w-full">
									<Image
										src={publication.image}
										alt={publication.name}
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<div className="p-4">
									<div className="mb-2 font-semibold">{publication.name}</div>
									<div className="flex justify-between items-center">
										<span>{publication.articles?.length} Articles</span>
										<span>${publication.price.toFixed(2)}</span>
									</div>
								</div>
							</a>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
