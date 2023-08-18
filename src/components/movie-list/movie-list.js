import React from 'react'
import styles from './movie-list.module.css'
import MovieItem from '../movie-item/movie-item'

const MovieList = ({ movies, selectedID, onSelect }) => {
  return (
    <ul className={styles.movie}>
      {movies.map((movie) => (
        <MovieItem
          movie={movie}
          key={movie.imdbID}
          onSelect={onSelect}
          selectedID={selectedID}
        />
      ))}
    </ul>
  )
}

export default MovieList
