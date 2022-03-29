import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './AppContext'
import Follower from './Follower'

const App = () => {
  const { followers, isLoading } = useGlobalContext()
  const [paginatedFollowers, setPaginatedFollowers] = useState(followers)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    setPaginatedFollowers(followers[pageNumber])
  }, [followers, pageNumber])

  const pageHandler = (value) => {
    if (value === 'prev') {
      setPageNumber((oldNumberPage) => {
        let newNumberPage = oldNumberPage - 1
        if (newNumberPage < 0) {
          newNumberPage = followers.length - 1
        }
        return newNumberPage
      })
    }
    if (value === 'next') {
      setPageNumber((oldNumberPage) => {
        let newNumberPage = oldNumberPage + 1
        if (newNumberPage > followers.length - 1) {
          newNumberPage = 0
        }
        return newNumberPage
      })
    }
  }

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  return (
    <main className='section-center'>
      <section className='section-title'>
        <h2>
          <i>Pagination</i>
        </h2>
        <h3 className='underline'></h3>
      </section>
      <section className='followers'>
        {paginatedFollowers.map((follower, index) => {
          return <Follower key={index} {...follower} />
        })}
      </section>
      <section className='buttons section-center'>
        <div className='btns-container'>
          <button className='btn' onClick={() => pageHandler('prev')}>
            prev
          </button>
          {followers.map((followers, index) => {
            return (
              <button
                className='btn'
                key={index}
                onClick={() => setPageNumber(index)}
              >
                {index + 1}
              </button>
            )
          })}
          <button className='btn' onClick={() => pageHandler('next')}>
            next
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
