import styles from './NavBlock.module.sass';
import { HashLink } from 'react-router-hash-link';

export const NavBlock = () => {
  return (
    <nav className={styles.navblock}>
      <ul className={styles.navlist}>
        <li>
          <HashLink to="/#hero">Доказательства экспертности</HashLink>
        </li>
        <li>
          <HashLink to="/#hero">Услуги и цены</HashLink>
        </li>
        <li>
          <HashLink to="/#hero">Советы</HashLink>
        </li>
        <li>
          <HashLink to="/#hero">Отзывы</HashLink>
        </li>
        <li>
          <HashLink to="/#hero">Контакты</HashLink>
        </li>
      </ul>
    </nav>
  );
};
