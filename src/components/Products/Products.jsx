import { useState } from 'react';
import styles from './styles.module.sass';

export const Products = () => {
  const [active, setActive] = useState(1);

  return (
    <section className={styles.products} id='products'>
      <div className={styles.menu}>
        <button
          className={active === 1 ? styles.menuBtnActive : styles.menuBtn}
          onClick={() => setActive(1)}
        >
          Заикание
        </button>
        <button
          className={active === 2 ? styles.menuBtnActive : styles.menuBtn}
          onClick={() => setActive(2)}
        >
          Постановка
          <br />
          звуков
        </button>
        <button
          className={active === 3 ? styles.menuBtnActive : styles.menuBtn}
          onClick={() => setActive(3)}
        >
          Повышение
          <br />
          успеваемости в<br />
          школе
        </button>
        <button
          className={active === 4 ? styles.menuBtnActive : styles.menuBtn}
          onClick={() => setActive(4)}
        >
          Дизартрия,
          <br />
          дислексия,
          <br />
          дислалия
        </button>
      </div>
    </section>
  );
};
