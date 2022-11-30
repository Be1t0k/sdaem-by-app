import React from 'react';
import styles from './OverHeaderLink.module.scss';
import "typeface-inter";

const OverHeaderLink = () => {
  return (
    <header className={styles.hug}>
      <a href="#">Главная</a>
      <a href="#">Новости</a>
      <a href="#">Размещение и тарифы</a>
      <a href="#">Объявления на карте</a>
      <a href="#">Контакты</a>
    </header>
  );
}

export default OverHeaderLink;
