import React from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={`${styles.nav1} bg-accent1-600`}>
        <img src="/images/icon-presentation-play.svg" width="60px"></img>
        <p>Presentations</p>
      </div>
      <div className={`${styles.nav1} bg-accent2-300`}>
        <img src="/images/icon-user-group.svg" width="60px"></img>
        <p>Members</p>
      </div>
      <div className={`${styles.nav1} bg-primary-500`}>
        <img src="/images/icon-application.svg" width="60px"></img>
        <p>Apps</p>
      </div>
    </div>
  );
}
