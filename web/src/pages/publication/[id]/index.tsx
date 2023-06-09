import { FC } from 'react'
import ConnectWallet from '@/components/ConnectWallet'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useRouter } from 'next/router'
import Image from 'next/image'
import mockPublications from '@/mockData'

const Article: FC = () => {
	const router = useRouter()
	const { id } = router.query
	// If id is not available, return loading text
	if (!id) {
		return <div>Loading...</div>
	}

	const publication = mockPublications.find(publication => publication.id === id)

	// If publication is not found, return not found text
	if (!publication) {
		return <div>Publication not found</div>
	}
	return (
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
			<div className="absolute top-6 right-6">
				<ConnectWallet />
			</div>
			<ThemeSwitcher className="absolute bottom-6 right-6" />
			<div className="container mx-auto p-4">
				<div className="w-full">
					{/* Banner Image */}
					<div className="w-full">
						<Image
							src={publication.image || ''}
							alt={publication.name}
							layout="responsive"
							width={1200}
							height={400}
							className="object-cover"
						/>
					</div>
					{/* Info Section */}
					<div className="flex justify-between items-start mt-4">
						<div>
							<div className="text-2xl font-semibold">{publication.name}</div>
							<div className="mt-2">Owner: {'publication.owner'}</div>
							<div className="mt-2">Price: ${publication.price.toFixed(2)}</div>
						</div>
						<div>
							<button className="bg-blue-500 text-white px-4 py-2 rounded">Buy/Sell</button>
						</div>
					</div>
					{/* Articles Section */}
					<div className="mt-6">
						<h2 className="text-xl font-semibold mb-2">Articles:</h2>
						{/* <ul>
                            {publication.articles.map((article) => (
                                <li key={article.id} className="border-b py-2">{article.title}</li>
                            ))}
                        </ul> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Article
