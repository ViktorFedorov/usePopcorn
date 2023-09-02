import React, { useState } from 'react'
import styles from './rating-scale.module.css'

const RatingScale = ({ length = 10, rating, setRating }) => {
  const [tempRating, setTempRating] = useState(0)

  return (
    <div className={styles.flex}>
      <ul className={styles.scale} onMouseLeave={() => setTempRating(0)}>
        {Array.from({ length: length }).map((star, index) => (
          <li
            className={
              tempRating <= index && rating <= index
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
      <div className={styles.rating}>{tempRating || rating || ''}</div>
    </div>
  )
}

export default RatingScale
