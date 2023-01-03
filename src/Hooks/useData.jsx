import axios from "axios"
import { useState, useEffect } from "react"
const useData = (url) => {
  const [data, setData] = useState([])
  useEffect(() => {
    if (url) {
      let ignore = false
      axios.get(url).then((response) => {
        if (!ignore) {
          setData(response.data)
        }
      })
      return () => {
        ignore = true
      }
    }
  }, [url])

  return data
}

export default useData
