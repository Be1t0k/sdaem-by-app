import React from 'react';
import styles from './OverHeader.module.scss';
import OverHeaderLink from '../OverHeaderLink/OverHeaderLink';
import OverHeaderLogin from '../OverHeaderLogin/OverHeaderLogin';
import './OverHeader.scss'

const OverHeader = () => {
  return (
    
    <header>
      <OverHeaderLink />
      <OverHeaderLogin />
    </header>

  );
}

export default OverHeader;
