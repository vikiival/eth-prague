import { FC } from 'react'
import ConnectWallet from '@/components/ConnectWallet'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useRouter } from 'next/router';
import Image from 'next/image'
import mockPublications from '@/mockData/mockPub'


import Header from '@/components/Header'

/*
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
			<div className="absolute top-6 right-6">
				<ConnectWallet />
			</div>
            Article page: {id}
			<ThemeSwitcher className="absolute bottom-6 right-6" />
		</div>
		*/

const Article: FC = () => {
    const router = useRouter();
    const { id } = router.query;
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

		<Header />

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

		<img 
		className="w-full h-40 object-cover"
		src=""
		alt=""/>

		<article className="max-w-3xl mx-auto p-5">
			<h1 className="text-3xl mt-10 mb-3">Post title</h1>
			<h2 className="text-xl font-light text-gray-500 mb-2">Post </h2>

			<div className="flex items-center px-5 space-x-2">
				<img
					className="h-10 w-10 rounded-full" 
					src=""
					alt=""
				/>
				<p className="font-extralight text-sm">
					Blog post by <span className="text-green-600">Author name </span>- Publish at {" "}
					{new Date("created").toLocaleString()}
				</p>
			</div>

			
		</article>


		<hr className="max-w-lg my-5 mx-auto border border-yellow-500" />

		</div>

	)
}




export default Article
