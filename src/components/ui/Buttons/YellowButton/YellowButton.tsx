import { FC } from 'react'
import styles from './YellowButton.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export const YellowButton: FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <button className={styles.btn} {...rest}>
      {title}
    </button>
  )
}
