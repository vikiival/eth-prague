import { FC } from 'react'
import ConnectWallet from '@/components/ConnectWallet'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useRouter } from 'next/router';
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
	return (
		

		<main>
		<Header />

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


		</main>
	)
}




export default Article
