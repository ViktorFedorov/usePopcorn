import React from 'react'
import WatchedMovieItem from '../watched-movie-item/watched-movie-item'

const WatchedMovieList = ({ watched, onDeleteWatched }) => {
  return (
    <ul>
      {watched.map((movie) => (
        <WatchedMovieItem
          {...movie}
          onDeleteWatched={onDeleteWatched}
          key={movie.imdbID}
        />
      ))}
    </ul>
  )
}

export default WatchedMovieList
