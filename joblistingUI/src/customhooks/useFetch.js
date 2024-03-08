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
        //if data.error exists then do the rest of the code below
        // error:500 = "internal server error"
        // error:404 = "not found error"

        console.log(err.message)
        setError(err.message)
      })
      .finally(() => setIsLoading(false))

  }, [url])

  return { allOptions, isLoading, error }
}