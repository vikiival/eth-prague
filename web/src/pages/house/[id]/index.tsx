import { FC } from 'react'
import { useRouter } from 'next/router'
import House from '@/components/House'


const HousePage: FC = () => {
	const router = useRouter()
	const { id } = router.query

	// If id is not available, return loading text
	if (id === undefined) {
		return <div>Loading...</div>
	}

	return <House id={parseInt(id as string)} />
}

export default HousePage
