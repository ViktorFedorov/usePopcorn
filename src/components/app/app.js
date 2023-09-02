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

export const KEY = `b6e4f2d5`

function App() {
  const [movies, setMovies] = useState([])
  const [watched, setWatched] = useState([])
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

  const handleAddWatched = (movie) => {
    if (watched.some((watchedFilm) => movie.title === watchedFilm.title)) return
    setWatched((watched) => [...watched, movie])
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
              onAddWatched={handleAddWatched}
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
