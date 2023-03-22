import React from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className={`${styles.navbar} block lg:flex`}>
      <div
        className={`${styles.nav1} bg-accent1-600 hover:border-solid hover:border-4 hover:border-accent1-900 hover:cursor-pointer hover:underline hover:decoration-accent1-900 hover:decoration-4 mb-20`}
      >
        <img src="/images/icon-presentation-play.svg" width="60px"></img>
        <p>Presentations</p>
      </div>
      <div
        className={`${styles.nav1} bg-accent2-300 hover:border-solid hover:border-4 hover:border-accent2-900 hover:cursor-pointer hover:underline hover:decoration-accent2-900 hover:decoration-4 mb-20`}
      >
        <FontAwesomeIcon
          icon={faUsers}
          size="3x"
          style={{ opacity: '50%', position: 'absolute' }}
        />
        <p>Members</p>
      </div>
      <div
        className={`${styles.nav1} bg-primary-500 hover:border-solid hover:border-4 hover:border-primary-900 hover:cursor-pointer hover:underline hover:decoration-primary-900 hover:decoration-4 hover:underline-offset-4 mb-20`}
      >
        <img src="/images/icon-application.svg" width="60px"></img>
        <p>Apps</p>
      </div>
    </div>
  );
}
