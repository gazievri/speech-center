import styles from "./styles.module.sass";
import { HashLink } from "react-router-hash-link";

export const NavBlock = ({ header = false, footer = false }) => {
  return (
    <nav className={header ? styles.navblock : styles.navblockFooter}>
      <ul className={header ? styles.navlist : styles.navlistFooter}>
        <li className={footer ? styles.navlistFooterLi : ''}>
          <HashLink to="/#hero">Доказательства экспертности</HashLink>
        </li>
        <li className={footer ? styles.navlistFooterLi : ''}>
          <HashLink to="/#hero">Услуги и цены</HashLink>
        </li>
        <li className={footer ? styles.navlistFooterLi : ''}>
          <HashLink to="/#hero">Советы</HashLink>
        </li>
        <li className={footer ? styles.navlistFooterLi : ''}>
          <HashLink to="/#hero">Отзывы</HashLink>
        </li>
        <li className={footer ? styles.navlistFooterLi : ''}>
          <HashLink to="/#hero">Контакты</HashLink>
        </li>
      </ul>
    </nav>
  );
};
