import { useEffect, useState } from 'react'

export const KEY = `b6e4f2d5`

export const useMovies = (query) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        setError('')

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal }
        )

        if (!res.ok)
          throw new Error('Something went wrong with fetching movies')

        const data = await res.json()

        if (data.Response === 'False') throw new Error(data.Error)

        setMovies(data.Search)
        setError('')
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    if (query.length < 3) {
      setMovies([])
      setError('')
      return
    }

    // закроем детали фильма при вводе новго поискового запроса
    // handleCloseMovie()

    fetchMovies()

    // при вводе каждого симвла в поисковом запросе - компонент перерисовывается
    // и для того чтобы не было утечек памяти надо отменять предыдущий запрос,
    // если он не успел выполнится, при вводе нового символа
    // при размонтировании компонента
    return () => controller.abort()
  }, [query])

  return { movies, isLoading, error }
}
