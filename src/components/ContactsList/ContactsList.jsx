import styles from "./styles.module.sass";

export const ContactsList = ({ whiteTheme = false, contacts = false, isMobile = false}) => {
  return (
    <address className={contacts ? styles.addressContacts : styles.address }>
      <a
        className={whiteTheme ? styles.linkWhite : styles.link}
        href="tel:+79683829463"
        rel="noreferrer"
      >
        <div className={whiteTheme ? styles.iconPhoneWhite : styles.iconPhone} />
        +7 (968) 382 94 63
      </a>

      <a
        className={whiteTheme ? styles.linkWhite : styles.link}
        href="tel:+79636942941"
        rel="noreferrer"
      >
       <div className={whiteTheme ? styles.iconPhoneWhite : styles.iconPhone} />
        +7 (963) 694 29 41
      </a>

      <a
        className={whiteTheme ? styles.linkWhite : styles.link}
        target="_blank"
        rel="noreferrer"
        href="https://yandex.ru/maps/-/CCUoMSaO2C"
      >
        <div className={whiteTheme ? styles.iconPlaceWhite : styles.iconPlace} />
        Калашный переулок, 5
      </a>

      {/* {contacts && (
        <ul className={styles.contscts__socials}>
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
      )} */}
    </address>
  );
};


