import React from 'react'
import styles from './movie-list.module.css'
import MovieItem from '../movie-item/movie-item'

const MovieList = ({ movies }) => {
  return (
    <ul className={styles.movie}>
      {movies.map((movie) => (
        <MovieItem {...movie} key={movie.imdbID} />
      ))}
    </ul>
  )
}

export default MovieList
