import React from 'react'
import styles from './watched-summary.module.css'

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

const average = (arr) => {
  return arr.reduce((acc, item) => acc + item / arr.length, 0)
}

const WatchedSummary = () => {
  const avgImdbRating = average(tempWatchedData.map((item) => item.imdbRating))
  const avgUserRating = average(tempWatchedData.map((item) => item.userRating))
  const avgUserRuntime = average(tempWatchedData.map((item) => item.runtime))

  return (
    <div className={styles.summary}>
      <h2 className={styles.heading}>Movies you watched</h2>
      <ul className={styles.statistics}>
        <li>🔢 {tempWatchedData.length} movies</li>
        <li>⭐ {avgImdbRating}</li>
        <li>🌟 {avgUserRating}</li>
        <li>⏳ {avgUserRuntime} min</li>
      </ul>
    </div>
  )
}

export default WatchedSummary
