import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ status: false, msg: '' })
  const [data, setData] = useState([])

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios(url)
      const data = response.data
      setData(data)
      setLoading(false)
      setError({ status: false, msg: '' })
    } catch (error) {
      setError({
        status: error.response.data.Response,
        msg: error.response.data.Error,
      })
      setLoading(false)
      console.log(error.response.data.Error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { loading, error, data }
}

export default useFetch
