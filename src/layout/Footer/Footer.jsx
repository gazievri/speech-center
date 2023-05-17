import styles from "./styles.module.sass";
import logo from "../../assets/images/logo-footer.svg";
import { NavBlock } from "../../components/NavBlock/NavBlock";

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

          <ul className={styles.footer__socials}>
            <li className={styles.linkSocialFb}>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              ></a>
            </li>
            <li className={styles.linkSocialInst}>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              ></a>
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
};
