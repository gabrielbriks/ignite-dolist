import rocketSvg from '../assets/rocket.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles['header-app']}>
      <h1 className={styles.title}>
        <img className={styles.logoSvg} src={rocketSvg} alt="logo" />
        <span className={styles['title-to']}>do</span><span className={styles['title-do']}>list</span>
      </h1>
    </header >
  )
}



