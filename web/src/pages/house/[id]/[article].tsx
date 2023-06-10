import { FC } from 'react'
import ConnectWallet from '@/components/ConnectWallet'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useRouter } from 'next/router';
import Image from 'next/image'
import mockArticles from '@/mockData/mockArticle'


import Header from '@/components/Header'


		// <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
		// 	<div className="absolute top-6 right-6">
		// 		<ConnectWallet />
		// 	</div>
        //     Article page: {id}
		// 	<ThemeSwitcher className="absolute bottom-6 right-6" />
		// </div>
		

const Article: FC = () => {
    const router = useRouter();
    const { article } = router.query;
	// If id is not available, return loading text
	if (!article) {
		return <div>Loading...</div>
	}

	const publishedArticle = mockArticles.find(data => data.id === article)

	// If publication is not found, return not found text
	if (!publishedArticle) {
		return <div>Publication not found, Article page: {article}</div>
	}

	return (
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">

		<div className="container mx-auto p-4">
				<div className="w-full">
					{/* Banner Image */}
					<div className="w-full">
						<Image
							src={publishedArticle.image || ''}
							alt={publishedArticle.title}
							layout="responsive"
							width={1200}
							height={200}
							className="object-cover"
						/>
					</div>
					<h1 className="text-3xl mt-10 mb-3">{publishedArticle.title}</h1>
					<h2 className="text-xl font-light text-gray-500 mb-2">{publishedArticle.summary} </h2>

						<div className="flex items-center px-5 space-x-2">
							<Image
								src={publishedArticle.authorImage || ''}
								alt={publishedArticle.author}
								layout="responsive"
								width={10}
								height={10}
								className="h-10 w-10 rounded-full" 
							/>
							<p className="font-extralight text-sm">
								Blog post by <span className="text-green-600">{publishedArticle.author}</span>- Publish at {" "}
								{new Date(publishedArticle.publishDate).toLocaleString()}
							</p>
						</div>
						<div className="py-5">
							<p>
								{publishedArticle.content}
							</p>
						</div>
				</div>
			</div>



		<hr className="max-w-lg my-5 mx-auto border border-yellow-500" />

		</div>

	)
}




export default Article
