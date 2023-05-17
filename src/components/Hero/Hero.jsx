import styles from './styles.module.sass';
import { ButtonW } from '../ButtonW/Button';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero.png';

export const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div>
        <ul className={styles.services}>
          <li className={styles.service}>
            <h2 className={styles.serviceText}>Заикаетесь?</h2>
            <Link className={styles.link}>подробнее</Link>
          </li>
          <li className={styles.service}>
            <h2 className={styles.serviceText}>
              Не понимают, что вы говорите?
            </h2>
            <Link className={styles.link}>подробнее</Link>
          </li>
          <li className={styles.service}>
            <h2 className={styles.serviceText}>Ребенок молчит у доски?</h2>
            <Link className={styles.link}>подробнее</Link>
          </li>
          <li className={styles.service}>
            <h2 className={styles.serviceText}>
              Дизартрия, дислексия, дислалия, ОНР&nbsp;(3 уровня), афазия, ДЦП, ФФНР?
            </h2>
            <Link className={styles.link}>подробнее</Link>
          </li>
        </ul>
        <h2 className={styles.moto}>Мы вам поможем</h2>
        <ButtonW />
      </div>

      <div>
        <div className={styles.imgBack}>
          <img src={heroImage} alt="" className={styles.img} />
        </div>
      </div>
    </section>
  );
};
