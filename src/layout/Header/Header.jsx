import styles from './Header.module.sass';
import logo from '../../assets/images/logo-header.svg';
import { NavBlock } from '../../components/NavBlock/NavBlock';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="Логотип центра речи Татьяны Горячкиной"
        className={styles.logo}
      />

      <NavBlock />

      <address>
        <a
          className={styles.link}
          href="tel:+79683829463"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.iconPhone} />
          +7 (968) 382 94 63
        </a>

        <a
          className={styles.link}
          href="tel:+79636942941"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.iconPhone} />
          +7 (963) 694 29 41
        </a>

        <a
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          href="https://yandex.ru/maps/-/CCUoMSaO2C"
        >
          <div className={styles.iconPlace} />
          Калашный переулок, 5
        </a>
      </address>
    </header>
  );
};
