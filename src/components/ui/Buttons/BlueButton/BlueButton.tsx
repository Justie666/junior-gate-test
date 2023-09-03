import { FC } from 'react'
import styles from './BlueButton.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export const BlueButton: FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <button className={styles.btn} {...rest}>
      {title}
    </button>
  )
}
