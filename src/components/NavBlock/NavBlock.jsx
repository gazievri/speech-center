import styles from "./styles.module.sass";
import { HashLink } from "react-router-hash-link";

export const NavBlock = ({ header = false, footer = false, setIsBurgerOff = Function.prototype }) => {

  const handleClick = () => {
    setIsBurgerOff(true);
  };

  return (
    <nav className={header ? styles.navblock : styles.navblockFooter}>
      <ul className={header ? styles.navlist : styles.navlistFooter}>
        <li className={footer ? styles.navlistFooterLi : ''} onClick={handleClick}>
          <HashLink to="/#hero">Доказательства экспертности</HashLink>
        </li>
        <li className={footer ? styles.navlistFooterLi : ''} onClick={handleClick}>
          <HashLink to="/#products">Услуги и цены</HashLink>
        </li>
        <li className={footer ? styles.navlistFooterLi : ''} onClick={handleClick}>
          <HashLink to="/#tips">Советы</HashLink>
        </li>
        <li className={footer ? styles.navlistFooterLi : ''} onClick={handleClick}>
          <HashLink to="/#reviews">Отзывы</HashLink>
        </li>
        <li className={footer ? styles.navlistFooterLi : ''} onClick={handleClick}>
          <HashLink to="/#contacts">Контакты</HashLink>
        </li>
      </ul>
    </nav>
  );
};
