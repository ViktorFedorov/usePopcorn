import React from 'react'
import styles from './movie-item.module.css'

const MovieItem = ({ Poster, Title, Year }) => {
  return (
    <li className={styles.movie}>
      <img className={styles.poster} src={Poster} alt='' />
      <div>
        <h2 className={styles.title}>{Title}</h2>
        <p className={styles.year}>📅 {Year}</p>
      </div>
    </li>
  )
}

export default MovieItem
