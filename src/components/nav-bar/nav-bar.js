import React from 'react'
import styles from './nav-bar.module.css'
import Search from '../search/search'
import Logo from '../logo/logo'
import NumResults from '../num-results/num-results'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <Search />
      <NumResults />
    </nav>
  )
}

export default NavBar
