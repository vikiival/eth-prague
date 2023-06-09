import { FC } from 'react'
import ConnectWallet from '@/components/ConnectWallet'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useRouter } from 'next/router';

const Article: FC = () => {
    const router = useRouter();
    const { id } = router.query;
	return (
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
			<div className="absolute top-6 right-6">
				<ConnectWallet />
			</div>
            Article page: ${id}
			<ThemeSwitcher className="absolute bottom-6 right-6" />
		</div>
	)
}

export default Article
