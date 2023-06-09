import styles from './styles.module.sass';
import { ButtonW } from '../ButtonW/Button';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero.png';
import useMediaQuery from '../../utils/useMediaQuery';
import { HashLink } from 'react-router-hash-link';

export const Hero = ({ active, setActive }) => {
  const isTablet = useMediaQuery('(max-width: 850px)');

  return (
    <section className={styles.hero} id="hero">
      <div>
        <ul className={styles.services}>
          <li className={styles.service}>
            <h2 className={styles.serviceText}>Заикаетесь?</h2>
            <HashLink
              className={styles.link}
              to="#products"
              onClick={() => setActive(1)}
            >
              Подробнее
            </HashLink>
          </li>
          <li className={styles.service}>
            <h2 className={styles.serviceText}>
              Не понимают, что вы говорите?
            </h2>
            <HashLink
              className={styles.link}
              to="#products"
              onClick={() => setActive(2)}
            >
              Подробнее
            </HashLink>
          </li>
          <li className={styles.service}>
            <h2 className={styles.serviceText}>Ребенок молчит у доски?</h2>
            <HashLink
              className={styles.link}
              to="#products"
              onClick={() => setActive(3)}
            >
              Подробнее
            </HashLink>
          </li>
          <li className={styles.service}>
            <h2 className={styles.serviceText}>
              Дизартрия, дислексия, дислалия, ОНР&nbsp;(3 уровня), афазия, ДЦП,
              ФФНР?
            </h2>
            <HashLink
              className={styles.link}
              to="#products"
              onClick={() => setActive(4)}
            >
              Подробнее
            </HashLink>
          </li>
        </ul>

        {!isTablet && (
          <>
            <h2 className={styles.moto}>Мы вам поможем</h2>
            <div className={styles.btnWrapper}>
              <ButtonW />
            </div>
          </>
        )}
      </div>

      <div className={styles.imgBack}>
        <img src={heroImage} alt="" className={styles.img} />
      </div>

      {isTablet && (
        <>
          <h2 className={styles.moto}>Мы вам поможем</h2>
          <div className={styles.btnWrapper}>
            <ButtonW />
          </div>
        </>
      )}
    </section>
  );
};
