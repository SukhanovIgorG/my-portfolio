import { Link } from 'react-router-dom';
import logo from "../../assets/develoceraptor.png";

import styles from './header.module.sass';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.button}>Home</button>
        <button className={styles.button}>Blog</button>
        <button className={styles.button}>Contact</button>
      </div>
      <Link to='/' className={styles.logo}>
        <span>WEB.</span>
        <img className={styles.image} src={logo}></img>
        <br />
        <span>DEVeloceraptor</span>
      </Link>
      <div className={styles.container}>
        <button className={styles.button}>AI</button>
        <button className={styles.button}>login</button>
        <button className={styles.button}>chat</button>
      </div>
    </header>
  )
}