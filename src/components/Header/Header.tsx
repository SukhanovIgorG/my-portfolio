import { Link } from 'react-router-dom';
import styles from './header.module.sass';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
      <button>Home</button>
      <button>Blog</button>
      <button>Contact</button>
      </div>
      <Link to='/' className={styles.logo}>
        <span>Sukhanov.</span>
        <br />
        <span>Web</span>
      </Link>
      <div>
        <button>AI</button>
        <button>login</button>
        <button>chat</button>
      </div>
    </header>
  )
}