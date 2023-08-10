import React from 'react'
import styles from './nav-bar.module.css'
import Logo from '../logo/logo'
import Search from '../search/search'

const NavBar = ({ children }) => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <Search />
      {children}
    </nav>
  )
}

export default NavBar
