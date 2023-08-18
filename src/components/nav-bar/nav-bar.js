import React from 'react'
import styles from './nav-bar.module.css'
import Logo from '../logo/logo'

const NavBar = ({ children }) => {
  return (
    <nav className={styles.nav}>
      <Logo />
      {children}
    </nav>
  )
}

export default NavBar
