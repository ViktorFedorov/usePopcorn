import React, { useState } from 'react'
import styles from './text-expander.module.css'

const TextExpander = ({ text, wordsLimit }) => {
  const [open, setOpen] = useState(false)

  const prepareText = open
    ? text
    : text.split(' ').splice(0, wordsLimit).join(' ') + '...'

  return (
    <div className={styles.expander}>
      <p className={styles.text}>{prepareText}</p>
      <button onClick={() => setOpen((open) => !open)} className={styles.btn}>
        {open ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}

export default TextExpander
