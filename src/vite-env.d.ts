/// <reference types="vite/client" />

interface NewsResponse {
  status: string
  totalResults: number
  articles: ArticleType[]
}

interface ArticleType {
  source: {
    id: string | null
    name: string | null
  }
  author: string | null
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

interface ArticleProps {
  urlToImage: string
  title: string
  description: string
  url: string
}
  
interface EventType {
  _id: string
  title: string;
  venue: string;
  time: string;
  date: string;
  description: string;
  __v: number;
}
