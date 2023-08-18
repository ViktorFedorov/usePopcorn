import NavBar from '../nav-bar/nav-bar'
import Main from '../main/main'
import ListBox from '../list-box/list-box'
import styles from './app.module.css'
import MovieList from '../movie-list/movie-list'
import React, { useEffect, useState } from 'react'
import WatchedSummary from '../watched-summary/watched-summary'
import WatchedMovieList from '../watched-movie-list/watched-movie-list'
import NumResults from '../num-results/num-results'
import Loader from '../loader/loader'
import ErrorMessage from '../error-message/error-message'
import Search from '../search/search'
import MovieDetails from '../movie-details/movie-details'

const tempWatchedData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9
  }
]

const KEY = `b6e4f2d5`

function App() {
  const [movies, setMovies] = useState([])
  const [watched, setWatched] = useState(tempWatchedData)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  const [selectedID, setSelectedID] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        setError('')
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        )

        if (!res.ok)
          throw new Error('Something went wrong with fetching movies')

        const data = await res.json()

        if (data.Response === 'False') throw new Error(data.Error)

        setMovies(data.Search)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    if (query.length < 3) {
      setMovies([])
      setError('')
      return
    }

    fetchMovies()
  }, [query])

  const handleSelect = (id) => setSelectedID(id === selectedID ? '' : id)

  const handleCloseMovie = () => {
    setSelectedID('')
  }

  return (
    <div className={styles.app}>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <ListBox>
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onSelect={handleSelect}
              selectedID={selectedID}
            />
          )}
        </ListBox>
        <ListBox>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onCloseMovie={handleCloseMovie}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          )}
        </ListBox>
      </Main>
    </div>
  )
}

export default App
