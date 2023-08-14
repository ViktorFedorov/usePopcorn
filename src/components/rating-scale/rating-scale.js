import React, { useState } from 'react'
import styles from './rating-scale.module.css'

const RatingScale = ({ length = 10 }) => {
  const [rating, setRating] = useState(0)
  const [tempRating, setTempRating] = useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.rating}>{tempRating || rating || ''}</div>
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
      {!!rating && <button className={styles.add}>+ Add to list</button>}
    </div>
  )
}

export default RatingScale
