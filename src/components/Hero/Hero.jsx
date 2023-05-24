import styles from './styles.module.sass';
import { ButtonW } from '../ButtonW/Button';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero.png';
import useMediaQuery from '../../utils/useMediaQuery';

export const Hero = () => {
  const isTablet = useMediaQuery('(max-width: 850px)');

  return (
    <section className={styles.hero} id="hero">
      <div>
        <ul className={styles.services}>
          <li className={styles.service}>
            <h2 className={styles.serviceText}>Заикаетесь?</h2>
            <Link className={styles.link}>Подробнее</Link>
          </li>
          <li className={styles.service}>
            <h2 className={styles.serviceText}>
              Не понимают, что вы говорите?
            </h2>
            <Link className={styles.link}>Подробнее</Link>
          </li>
          <li className={styles.service}>
            <h2 className={styles.serviceText}>Ребенок молчит у доски?</h2>
            <Link className={styles.link}>Подробнее</Link>
          </li>
          <li className={styles.service}>
            <h2 className={styles.serviceText}>
              Дизартрия, дислексия, дислалия, ОНР&nbsp;(3 уровня), афазия, ДЦП,
              ФФНР?
            </h2>
            <Link className={styles.link}>Подробнее</Link>
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
