import React, { useEffect, useState } from 'react'
import { KEY } from '../app/app'
import styles from './movie-details.module.css'
import RatingScale from '../rating-scale/rating-scale'
import Loader from '../loader/loader'

const MovieDetails = ({ selectedID, onCloseMovie, onAddWatched }) => {
  const [movie, setMovie] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [rating, setRating] = useState(0)

  const {
    Poster: poster,
    Title: title,
    Released: released,
    Runtime: runtime,
    Genre: genre,
    imdbRating,
    Plot: plot,
    Actors: actors,
    Director: director,
    imdbID
  } = movie

  useEffect(() => {
    if (!title) return
    document.title = title
    return () => (document.title = 'usePopcorn')
  }, [title])

  useEffect(() => {
    setRating(0)
  }, [movie])

  useEffect(() => {
    if (!selectedID) return

    const getMovie = async () => {
      setIsLoading(true)
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
      )
      const data = await res.json()
      setMovie(data)
      setIsLoading(false)
    }

    getMovie()
  }, [selectedID])

  const handleAddWatched = () => {
    const newWatchedMovie = {
      title,
      userRating: rating,
      poster,
      imdbRating,
      runtime: Number(runtime.split(' ')[0]),
      imdbID
    }

    onAddWatched(newWatchedMovie)
    onCloseMovie()
  }

  return (
    <div className={styles.details}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button className={styles.back} onClick={onCloseMovie}>
            &larr;
          </button>
          <div className={styles.container}>
            <img src={poster} alt='' className={styles.poster} />
            <div className={styles.info}>
              <h2 className={styles.heading}>{title}</h2>
              <span>{released}</span>
              <span className={styles.dot}></span>
              <span>{runtime}</span>
              <p className={styles.genre}>{genre}</p>
              <p className={styles.rating}>⭐ {imdbRating} IMDb rating</p>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.wrapper}>
              <RatingScale
                onAddWatched={onAddWatched}
                rating={rating}
                setRating={setRating}
              />
              {!!rating && (
                <button
                  className={styles.add}
                  onClick={() => handleAddWatched(movie)}
                >
                  + Add to list
                </button>
              )}
            </div>
            <p className={styles.plot}>{plot}</p>
            <p className={styles.actors}>Starring {actors}</p>
            <p className={styles.director}>Directed by {director}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default MovieDetails
