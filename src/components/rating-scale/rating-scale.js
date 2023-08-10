import React, { useState } from 'react'
import styles from './rating-scale.module.css'

const stars = Array.from({ length: 10 })

const RatingScale = () => {
  const [rating, setRating] = useState(0)

  const handleMouseOver = (e, index) => {
    setRating(index)

    e.target.classList.add(styles.active)
  }

  console.log(rating)

  return (
    <ul className={styles.scale}>
      {stars.map((star, index) => (
        <div
          className={styles.star}
          key={index}
          onMouseOver={(e) => handleMouseOver(e, index)}
        >
          {' '}
        </div>
      ))}
    </ul>
  )
}

export default RatingScale
