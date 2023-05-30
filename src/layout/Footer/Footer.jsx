import styles from './styles.module.sass';
import logo from '../../assets/images/logo-footer.svg';
import { NavBlock } from '../../components/NavBlock/NavBlock';
import { ContactsList } from '../../components/ContactsList/ContactsList';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <img
          src={logo}
          alt="Логотип центра речи Татьяны Горячкиной"
          className={styles.logo}
        />

        <NavBlock footer />

        {/* <ContactsList whiteTheme/> */}

        <address className={styles.address}>
          <a
            className={styles.linkWhite}
            href="tel:+79683829463"
            rel="noreferrer"
          >
            <div className={styles.iconPhoneWhite} />
            +7 (968) 382 94 63
          </a>

          <a
            className={styles.linkWhite}
            href="tel:+79636942941"
            rel="noreferrer"
          >
            <div className={styles.iconPhoneWhite} />
            +7 (963) 694 29 41
          </a>

          <a
            className={styles.linkWhite}
            target="_blank"
            rel="noreferrer"
            href="https://yandex.ru/maps/-/CCUoMSaO2C"
          >
            <div className={styles.iconPlaceWhite} />
            Калашный переулок, 5
          </a>
        </address>
      </div>
      <ul className={styles.credentials}>
        <li className={styles.linkWhite}>ИП Бельский Антон Николаевич</li>
        <li className={styles.linkWhite}>ОГРНИП: 318505300151579</li>
        <li className={styles.linkWhite}>ИНН: 503419509740</li>
      </ul>
    </footer>
  );
};
