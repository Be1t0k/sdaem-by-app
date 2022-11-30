import React from 'react';
import styles from './OverHeader.module.scss';
import OverHeaderLink from '../OverHeaderLink/OverHeaderLink';
import OverHeaderLogin from '../OverHeaderLogin/OverHeaderLogin';

const OverHeader = () => {
  return (
    
    <header className={styles.header}>
      <OverHeaderLink />
      <OverHeaderLogin />
    </header>

  );
}

export default OverHeader;
