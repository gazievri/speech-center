import styles from "./styles.module.sass";
import { NavBlock } from '../NavBlock/NavBlock';

export const BurgerMenu = ({ isBurgerOff, setIsBurgerOff }) => {
  return (
    <div className={isBurgerOff ? styles.burgerOff : styles.burger}>
      <div className={styles.menu}>
        <NavBlock isBurgerOff={isBurgerOff} setIsBurgerOff={setIsBurgerOff} header={true} />
      </div>
    </div>
  );
};
