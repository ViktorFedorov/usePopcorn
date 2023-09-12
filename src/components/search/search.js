import React, { useEffect, useRef, useState } from 'react'
import styles from './search.module.css'
import { useKey } from '../../hooks/useKey'

const Search = ({ query, setQuery }) => {
  const inputRef = useRef()
  useKey('Enter', () => inputRef.current.focus())

  return (
    <input
      ref={inputRef}
      type='text'
      className={styles.search}
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

export default Search
