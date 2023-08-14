import NavBar from '../nav-bar/nav-bar'
import Main from '../main/main'
import ListBox from '../list-box/list-box'
import styles from './app.module.css'
import MovieList from '../movie-list/movie-list'
import React, { useState } from 'react'
import WatchedSummary from '../watched-summary/watched-summary'
import WatchedMovieList from '../watched-movie-list/watched-movie-list'
import NumResults from '../num-results/num-results'
import RatingScale from '../rating-scale/rating-scale'
import TextExpander from '../text-expander/text-expander'

const tempMovieData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
  },
  {
    imdbID: 'tt6751668',
    Title: 'Parasite',
    Year: '2019',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg'
  }
]

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

function App() {
  const [movies, setMovies] = useState(tempMovieData)
  const [watched, setWatched] = useState(tempWatchedData)

  return (
    <div className={styles.app}>
      <NavBar>
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <ListBox>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </ListBox>
      </Main>
      {/*<RatingScale />*/}
      <TextExpander
        text='Ситуация из реальной жизни. Мы пишем приложение для обмена сообщениями, и посетитель вводит имена тех, кому его отправить, через запятую: Вася, Петя, Маша. Но нам-то гораздо удобнее работать с массивом имён, чем с одной строкой. Как его получить?'
        wordsLimit={7}
      />

      <TextExpander
        text='Он принимает любое количество аргументов, которые могут быть как массивами, так и простыми значениями.

В результате – новый массив, включающий в себя элементы из arr, затем arg1, arg2 и так далее.

Если аргумент argN – массив, то копируются все его элементы. Иначе копируется сам аргумент.'
        wordsLimit={4}
      />
    </div>
  )
}

export default App
