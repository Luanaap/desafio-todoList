import styles from './Header.module.css'

import todoListLogo from '../assets/todo-logo.svg'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={todoListLogo} alt="Logotipo do To-Do List"/>
    </header>
  )
}