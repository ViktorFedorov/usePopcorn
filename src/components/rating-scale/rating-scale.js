import React, { useState } from 'react'
import styles from './rating-scale.module.css'

const RatingScale = ({ length = 10 }) => {
  const [rating, setRating] = useState(0)
  const [tempRating, setTempRating] = useState(0)

  return (
    <div>
      <div className={styles.rating}>{tempRating || rating || ''}</div>
      <ul className={styles.scale} onMouseLeave={() => setTempRating(0)}>
        {Array.from({ length: length }).map((star, index) => (
          <li
            className={
              tempRating <= index
                ? styles.star
                : `${styles.star} ${styles.active}`
            }
            key={index}
            onClick={() => setRating(index + 1)}
            onMouseOver={() => setTempRating(index + 1)}
          >
            {' '}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RatingScale
