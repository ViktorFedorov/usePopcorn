import React from 'react'
import styles from './watched-summary.module.css'

const average = (arr) => {
  return arr.reduce((acc, item) => acc + item / arr.length, 0)
}

const WatchedSummary = ({ watched }) => {
  const avgImdbRating = average(watched.map((item) => item.imdbRating))
  const avgUserRating = average(watched.map((item) => item.userRating))
  const avgUserRuntime = average(watched.map((item) => item.runtime))

  return (
    <div className={styles.summary}>
      <h2 className={styles.heading}>Movies you watched</h2>
      <ul className={styles.statistics}>
        <li>🔢 {watched.length} movies</li>
        <li>⭐ {avgImdbRating}</li>
        <li>🌟 {avgUserRating}</li>
        <li>⏳ {avgUserRuntime} min</li>
      </ul>
    </div>
  )
}

export default WatchedSummary
