import { Link } from 'react-router-dom';

import styles from './footer.module.sass';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Link className={styles.link} to='./'>Home</Link>
          <Link className={styles.link} to='./blog'>Blog</Link>
        </div>
        <div className={styles.container}>
          <Link className={styles.link} to='./'>Telegram</Link>
          <Link className={styles.link} to='./'>Instagram</Link>
          <Link className={styles.link} to='./'>Git Hub</Link>
        </div>
      </div>
    </footer>
  )
}