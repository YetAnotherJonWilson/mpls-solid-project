import React from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div
      className={`${styles.navbar} block lg:flex lg:col-start-1 lg:col-end-12`}
    >
      <div className={`${styles.nav1} shadow-lg bg-accent1-600 mb-20`}>
        <img src="/images/icon-presentation-play.svg" width="60px"></img>
        <p>What Solid Is</p>
      </div>
      <div className={`${styles.nav2} shadow-lg bg-accent2-300 mb-20`}>
        <FontAwesomeIcon
          icon={faUsers}
          size="3x"
          style={{ opacity: '50%', position: 'absolute' }}
        />
        <p>Who We Are</p>
      </div>
      <div className={`${styles.nav3} shadow-lg bg-primary-500 mb-20`}>
        <img src="/images/icon-application.svg" width="60px"></img>
        <p>What We're Doing</p>
      </div>
    </div>
  );
}
