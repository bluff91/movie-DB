import { useState } from 'react'
import { createContext, useContext } from 'react'

const apiKey = import.meta.env.VITE_API_KEY
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${apiKey}&s=`

const AppContext = createContext()

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('batman')

  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}
