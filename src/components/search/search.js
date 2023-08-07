import React, { useState } from 'react'
import styles from './search.module.css'

const Search = () => {
  const [query, setQuery] = useState('')

  return (
    <input
      type='text'
      className={styles.search}
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

export default Search
