import React from 'react'
import WatchedMovieItem from '../watched-movie-item/watched-movie-item'

const WatchedMovieList = ({ watched }) => {
  return (
    <ul>
      {watched.map((movie) => (
        <WatchedMovieItem {...movie} key={movie.imdbID} />
      ))}
    </ul>
  )
}

export default WatchedMovieList
