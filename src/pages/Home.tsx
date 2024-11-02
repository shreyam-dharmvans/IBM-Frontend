import { useState, useEffect } from 'react'
import './Home.css'

import Header from '../components/Header'
import Article from '../components/Article'
import Overview from '../components/Overview'
import { LandingSection } from '../components/LandingSection'

function Home() {
  const [data, setData] = useState<NewsResponse>({
    status: 'no_content',
    totalResults: 0,
    articles: []
  })

  useEffect(() => {
    fetch('./newsapi-response.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (error instanceof Error) {
          console.log(error.message)
        }
      })
  }, [])

  return (
    <>
      <Header></Header>


      <main className="container-fluid p-4">
        <h2 className="mb-4 text-center heading">
          <i>“The opposite of poverty is not wealth; <br />
            the opposite of poverty is enough.”</i>
        </h2>

        <LandingSection />

        <div className="row gy-4 my-style">{
          data.articles.map((article): JSX.Element => {
            return <Article {...article}></Article>
          })
        }</div>
      </main>
      <Overview></Overview>
    </>
  )
}

export default Home
