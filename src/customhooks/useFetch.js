import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [allOptions, setAllOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    //to simulate loading
    setTimeout(() => {
      fetch(url) 
      .then(res => res.json())
      .then(data => {
        
        console.log("Info data coming in: ", data);
        setAllOptions(data)
      })
      .catch(err => {
        console.log(err.message)
        setError(err.message)
      })
      .finally(() => setIsLoading(false))
    }, 400);
  }, [url])

  return { allOptions, isLoading, error }
}