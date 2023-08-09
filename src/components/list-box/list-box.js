import React, { useState } from 'react'
import styles from './list-box.module.css'
import MovieList from '../movie-list/movie-list'

const ListBox = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={styles.box}>
      <button
        className={styles.toggle}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? '-' : '+'}
      </button>
      {children}
    </div>
  )
}

export default ListBox
