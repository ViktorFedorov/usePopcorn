import React, { useEffect, useState } from 'react'
import styles from './movie-details.module.css'

const MovieDetails = ({ selectedID, onCloseMovie }) => {
  const [selectedMovie, setSelectedMovie] = useState('')

  useEffect(() => {
    if (!selectedID) return

    const getMovie = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=b6e4f2d5&i=${selectedID}`
      )
      const data = await res.json()
      setSelectedMovie(data)
    }

    getMovie()
  }, [selectedID])

  return (
    <div className={styles.details}>
      <button className={styles.back} onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedMovie.Plot}
    </div>
  )
}

export default MovieDetails
