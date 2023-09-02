import React from 'react'
import styles from './watched-movie-item.module.css'

const WatchedMovieItem = ({
  title,
  poster,
  imdbRating,
  userRating,
  runtime
}) => {
  return (
    <li className={styles.movie}>
      <img className={styles.poster} src={poster} alt='' />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.info}>
          <li>⭐ {imdbRating}</li>
          <li>🌟 {userRating}</li>
          <li>⏳ {runtime} min</li>
        </ul>
      </div>
    </li>
  )
}

export default WatchedMovieItem
