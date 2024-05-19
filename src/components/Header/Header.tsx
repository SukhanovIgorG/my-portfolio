import { Link } from 'react-router-dom';
import logo from "../../assets/develoceraptor.png";

import styles from './header.module.sass';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        <span>WEB.</span>
        <img className={styles.image} src={logo}></img>
        <br />
        <span>DEVeloceraptor</span>
      </Link>
      <div>
      <button>Home</button>
      <button>Blog</button>
      <button>Contact</button>
      </div>
      <div>
        <button>AI</button>
        <button>login</button>
        <button>chat</button>
      </div>
    </header>
  )
}