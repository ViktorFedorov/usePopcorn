import React from 'react'
import styles from './error-message.css'

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.error}>
      <span>🚫</span> {message}
    </div>
  )
}

export default ErrorMessage
