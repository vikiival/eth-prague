import { useRouter } from 'next/router'
import { articles } from '@/articels/articles'
import Header from '@/components/Header'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { $purify } from '@kodadot1/minipfs'


const ArticlePage: FC = () => {
  const router = useRouter()
  const { id, articleId } = router.query
  const [article, setArticle] = useState(null)

  useEffect(() => {
    // Fetch article based on id and articleId
    const fetchedArticle = articles[Number(articleId as string)] // Assuming articles is an array
    if (fetchedArticle) {
      setArticle(fetchedArticle)
    }
  }, [id, articleId])

  if (!article) {
    return <div>Loading...</div>
  }

  return (
    <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
      <div className="w-full absolute top-0">
        <Header />
      </div>
      <ThemeSwitcher className="absolute bottom-6 right-6" />
      <div className="flex flex-col items-center py-20 space-y-6">
          {/* Article Image */}
          <div className="w-250 h-64 relative overflow-hidden rounded-md">
            <Image
              src={$purify(article.image)[0] || ''}
              alt={article.name}
              layout="fill"
              objectFit="cover"

              className="object-contain"
            />
          </div>
          {/* Article Info Section */}
          <div className="flex flex-col max-w-2xl w-full items-start">
            <div className="text-base text-[#16392d] font-dela-gothic flex flex-col w-auto h-auto">
              {article.name}
            </div>
            <div className="flex justify-between items-center w-full h-auto">
              <div className="flex items-center space-x-4">
                <div className="text-sm font-roboto text-[#16392d] font-bold w-auto h-auto whitespace-nowrap flex flex-col">
                  Creator:
                </div>
                <div className="flex items-center space-x-3 w-auto h-auto">
                  <div className="w-5 h-5  flex items-center justify-center p-2.5 rounded-xl bg-center bg-no-repeat bg-cover overflow-hidden"
                    style={{backgroundImage: `url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg')`}}>
                  </div>
                  <div className="text-sm text-[#16392d] font-roboto lowercase w-auto h-auto whitespace-nowrap flex flex-col">789OHUGN98JIO</div>
                </div>
              </div>
              <div className="flex flex-col max-w-2xl w-auto h-auto space-y-6">
                <div className="text-sm text-black font-roboto text-opacity-75">{article.content}</div>
              </div>
                          
              {/* Tags */}
              <div className="mt-2">
                <span className="font-semibold">Tags:</span>
                <ul className="inline-block pl-2">
                  {article.tags.map((tag, index) => (
                    <li key={index} className="inline-block mr-2 text-sm bg-gray-200 rounded-full px-2">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
