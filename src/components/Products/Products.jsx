import styles from './styles.module.sass';
import { Stuttering, SoundSetting, Performance, Dysarthria } from './index';

export const Products = ({ active, setActive }) => {

  return (
    <section className={styles.section} id="products">
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
      <div className={styles.wrapper}>
        {active === 1 && <Stuttering />}
        {active === 2 && <SoundSetting />}
        {active === 3 && <Performance />}
        {active === 4 && <Dysarthria />}
      </div>
    </section>
  );
};
