import styles from "./styles.module.sass";
import logo from "../../assets/images/logo-footer.svg";
import { NavBlock } from "../../components/NavBlock/NavBlock";
import { ContactsList } from "../../components/ContactsList/ContactsList";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <img
          src={logo}
          alt="Логотип центра речи Татьяны Горячкиной"
          className={styles.logo}
        />

        <NavBlock footer/>

        <ContactsList whiteTheme/>
      </div>
    </footer>
  );
};
