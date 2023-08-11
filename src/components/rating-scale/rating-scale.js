import React, { useState } from 'react'
import styles from './rating-scale.module.css'

const RatingScale = ({ length = 10 }) => {
  const [rating, setRating] = useState(0)

  return (
    <ul className={styles.scale}>
      {Array.from({ length: length }).map((star, index) => (
        <li
          className={
            rating < index ? styles.star : `${styles.star} ${styles.active}`
          }
          key={index}
          onClick={() => setRating(index)}
          onMouseOver={() => setRating(index)}
        >
          {' '}
        </li>
      ))}
      <li>{rating + 1}</li>
    </ul>
  )
}

export default RatingScale
