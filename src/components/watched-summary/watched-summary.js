import React from 'react'
import styles from './watched-summary.module.css'

const average = (arr) => {
  return arr.reduce((acc, item) => acc + item / arr.length, 0)
}

const WatchedSummary = ({ watched }) => {
  const avgImdbRating = Math.ceil(
    average(watched.map((item) => item.imdbRating))
  ).toFixed(1)
  const avgUserRating = Math.ceil(
    average(watched.map((item) => item.userRating))
  ).toFixed(1)
  const avgUserRuntime = Math.ceil(average(watched.map((item) => item.runtime)))

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
