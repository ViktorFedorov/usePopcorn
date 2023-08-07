import React from 'react'
import styles from './nav-bar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>🍿 usePopcorn</div>
      <input
        type='text'
        className={styles.search}
        placeholder='Search movies...'
      />
      <div>Find 3 results</div>
    </nav>
  )
}

export default NavBar
