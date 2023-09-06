import React from 'react'
import styles from './watched-movie-item.module.css'

const WatchedMovieItem = ({
  title,
  poster,
  imdbRating,
  imdbID,
  userRating,
  runtime,
  onDeleteWatched
}) => {
  return (
    <li className={styles.movie} key={imdbID}>
      <img className={styles.poster} src={poster} alt='' />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.info}>
          <li>⭐ {imdbRating}</li>
          <li>🌟 {userRating}</li>
          <li>⏳ {runtime} min</li>
        </ul>
      </div>
      <button className={styles.remove} onClick={() => onDeleteWatched(imdbID)}>
        x
      </button>
    </li>
  )
}

export default WatchedMovieItem
