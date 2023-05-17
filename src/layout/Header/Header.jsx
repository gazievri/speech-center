import styles from "./Header.module.sass";
import logo from "../../assets/images/logo-header.svg";
import { NavBlock } from "../../components/NavBlock/NavBlock";
import { ContactsList } from "../../components/ContactsList/ContactsList";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="Логотип центра речи Татьяны Горячкиной"
        className={styles.logo}
      />

      <NavBlock header />

      <ContactsList />
    </header>
  );
};
