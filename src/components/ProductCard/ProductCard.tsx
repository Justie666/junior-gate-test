import headphonesPng from '@assets/images/headphones.png'
import { FC } from 'react'
import { BlueButton, YellowButton } from '../ui'
import styles from './ProductCard.module.scss'

export const ProductCard: FC = () => {
  return (
    <div className={styles.container}>
      <img src={headphonesPng} alt='Product' className={styles.img} />
      <p className={styles.price}>$100</p>
      <h2 className={styles.title}>Zebronics head phone</h2>
      <p className={styles.description}>
        A portable headphone with a battery life of 20 hours and IP67 rating.
        Comes with a 3 years warranty.
      </p>
      <p className={styles.choose}>Choose your colour</p>
      <div className={styles.buttons}>
        <YellowButton title='Add to cart' />
        <BlueButton title='Buy now' />
      </div>
      <a href='#' className={styles.linkToReviews}>
        Read reviews
      </a>
    </div>
  )
}
