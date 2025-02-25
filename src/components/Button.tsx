import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import styles from './Button.module.css'


type Props = DetailedHTMLProps<
ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement>

export function Button({ children, ...rest}: Props){
  return(
    <button className={styles.container} {...rest}>
      {children}
    </button>
  )
}