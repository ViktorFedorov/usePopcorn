import React, { useEffect } from 'react'
import styles from './movie-item.module.css'

const MovieItem = ({ movie, selectedID, onSelect }) => {
  return (
    <li
      className={
        selectedID === movie.imdbID
          ? `${styles.movie} ${styles.active}`
          : styles.movie
      }
      onClick={() => onSelect(movie.imdbID)}
    >
      <img className={styles.poster} src={movie.Poster} alt='' />
      <div>
        <h2 className={styles.title}>{movie.Title}</h2>
        <p className={styles.year}>📅 {movie.Year}</p>
      </div>
    </li>
  )
}

export default MovieItem
