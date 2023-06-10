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
      <div className="container mx-auto p-4 py-20">
        <div className="w-full py-10">
          {/* Article Image */}
          <div className="w-full">
            <Image
              src={$purify(article.image)[0] || ''}
              alt={article.name}
              layout="responsive"
              width={1200}
              height={600}
              style={{ objectFit: 'contain' }}
              className="object-contain"
            />
          </div>
          {/* Article Info Section */}
          <div className="mt-4">
            <h3 className="text-2xl font-semibold">{article.name}</h3>
            <p className="text-sm text-gray-500 mb-2">created by:</p>
            <div className="text-base">{article.content}</div>
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
  )
}

export default ArticlePage
