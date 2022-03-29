import React, { useState, useEffect, useContext } from 'react'
import App from './App'
import paginate from './paginate'

const AppContext = React.createContext()
const url = 'https://api.github.com/users/bradtraversy/followers?per_page=100'

export const AppProvider = ({ children }) => {
  const [followers, setFollowers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchFollowers = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()

      setFollowers(paginate(data))
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchFollowers(url)
  }, [])

  return (
    <AppContext.Provider value={{ followers, isLoading }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
