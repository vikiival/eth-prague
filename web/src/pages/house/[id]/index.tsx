import { FC, useEffect, useState } from 'react'
import ConnectWallet from '@/components/ConnectWallet'
import Header from '@/components/Header'

import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useRouter } from 'next/router'
import Image from 'next/image'
import mockPublications from '@/mockData/mockPub'
import { useContractRead } from 'wagmi'
import nftABI from '@/abi/NFTAbi.json'
import registeryABI from '@/abi/RegistryAbi.json'
import { $purify, $obtain, URI } from '@kodadot1/minipfs'
import { URL } from 'url'

const NFT_CONTRACT_ADDRESS = '0x9dfef6f53783c7185c69f45a51bede2c32e4ac3e'
const REGISTERY_CONTRACT_ADDRESS = '0x02101dfB77FDE026414827Fdc604ddAF224F0921'
const IMPLEMENTATION = '0xf999F659c5Ab90E42E466B367BB56e8BD56cE524'
const SALT = 6551

const etherScanBaseUrl = 'https://goerli.etherscan.io/address/'

const Article: FC = () => {
	const router = useRouter()
	const { id } = router.query
	const [publication, setPublication] = useState(null)
	const [houseAddress, setHouseAddress] = useState(null)

	const {
		data: nftData,
		isError,
		isLoading,
	} = useContractRead({
		addressOrName: NFT_CONTRACT_ADDRESS,
		functionName: 'tokenURI',
		args: [0],
		contractInterface: nftABI,
	})

	const { data: registeryData } = useContractRead({
		addressOrName: REGISTERY_CONTRACT_ADDRESS,
		functionName: 'account',
		args: [IMPLEMENTATION, 5, NFT_CONTRACT_ADDRESS, 0, SALT],
		contractInterface: registeryABI,
	})

	if (registeryData) {
		console.log('registeryData', registeryData)
	}

	useEffect(() => {
		if (registeryData) {
			setHouseAddress(registeryData)
		}
	}, [registeryData])

	useEffect(() => {
		if (nftData) {
			const uri = $purify(nftData as unknown as string)
			console.log(uri)

			fetch(uri[0] as unknown as string)
				.then(response => response.json())
				.then(fetchedData => {
					const cleanImage = $purify(fetchedData.image as unknown as string)
					console.log('cleanImage', cleanImage)
					fetchedData.image = cleanImage[0] as unknown as string
					console.log('fetchedData', fetchedData)
					setPublication(fetchedData)
				})
				.catch(err => {
					console.error('Failed to fetch publication', err)
				})
		}
	}, [nftData])
	// If id is not available, return loading text
	if (!id) {
		return <div>Loading...</div>
	}

	// If id or data is not available, return loading text
	if (!id || !publication) {
		return <div>Loading...</div>
	}
	return (
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
			<div className="w-full absolute top-0">
				<Header />
			</div>
			<ThemeSwitcher className="absolute bottom-6 right-6" />
			<div className="container mx-auto p-4 py-20">
				<div className="w-full py-10">
					{/* Banner Image */}
					<div className="w-full">
						<Image
							src={publication.image || ''}
							alt={publication.name}
							layout="responsive"
							// fill={true}
							width={1200}
							height={600}
							style={{ objectFit: 'contain' }}
							className="object-contain"
						/>
					</div>
					{/* Info Section */}
					<div className="flex justify-between items-start mt-4">
						<div>
							<div className="text-2xl font-semibold">{publication.name}</div>
							<div className="mt-2">{publication.description}</div>
							<div className="mt-2">
								<span>House Address:</span>{' '}
								<a className='text-blue-500 underline' href={`${etherScanBaseUrl}${houseAddress}`}>{houseAddress}</a>
							</div>
							{/* <div className="mt-2">Price: ${publication.price.toFixed(2)}</div> */}
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
