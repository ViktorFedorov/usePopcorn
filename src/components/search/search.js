import React, { useState } from 'react'
import styles from './search.module.css'

const Search = ({ query, setQuery }) => {
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
