import { useEffect, useState } from "react"


export const useFetch = (url) => {
  const [allOptions, setAllOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url) //fetching from API that i set
      .then(res => res.json())
      .then(data => {
        setAllOptions(data)
        console.log("Info data coming in: ", data);
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
      .finally(() => setIsLoading(false))

  }, [url])

  return { allOptions, isLoading, error }
}