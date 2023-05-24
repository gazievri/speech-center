import styles from './styles.module.sass';
import { ButtonW } from '../../ButtonW/Button';
// import video from '../../../assets/video/performance.mp4'

export const Performance = () => {
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>Ребёнок молчит у доски?</h2>
      <div className={styles.conteinerOne}>
        <iframe
          width="100%"
          height="318"
          src="https://www.youtube.com/embed/_IE5nqNm50s"
          title="Повышение успеваемости"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className={styles.textContainer}>
          <p className={styles.text}>
            Ты <span className={styles.textBlue}>сможешь легко</span> и даже без
            подготовки{' '}
            <span className={styles.textBlue}>отвечать на сложные вопросы</span>{' '}
            - <span className={styles.textBlue}>импровизировать</span> в логике
            темы.
          </p>

          <p className={styles.text}>
            Будешь{' '}
            <span className={styles.textBlue}>
              уверенно чувствовать себя у доски
            </span>{' '}
            - концентрировать внимание на действии, а не на волнении.
          </p>

          <p className={styles.text}>
            <span className={styles.textBlue}>
              Запоминать параграфы и правила
            </span>{' '}
            станет <span className={styles.textBlue}>легко</span> - ты освоишь
            актерскую технику действенного разбора текста.
          </p>
        </div>
      </div>

      <div className={styles.conteinerTwo}>
        <div className={styles.priceBlock}>
          <p className={styles.price}>
            индивидуально 2500 ₽{' '}
            <span className={styles.priceSpan}>(1 час)</span>
          </p>
          <p className={styles.price}>
            групповое занятие 2000 ₽{' '}
            <span className={styles.priceSpan}>(2 часа)</span>
          </p>

          <div className={styles.discountsBlock}>
            <h4 className={styles.discountsTitle}>Скидки:</h4>
            <p className={styles.discountsTitle}>Многодетным семьям:</p>
            <ul>
              <li className={styles.discountsItem}>
                500 ₽ (индивидуальное занятие)
              </li>
              <li className={styles.discountsItem}>
                200 ₽ (групповое занятие)
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className={styles.textCta}>Вы получите:</h3>
          <ul className={styles.listBenefits}>
            <li className={styles.listBenefitsItem}>
              Тренировка концентрации внимания
            </li>
            <li className={styles.listBenefitsItem}>
              Мысль &rarr; слово (навык обращения мысли в словесную форму)
            </li>
            <li className={styles.listBenefitsItem}>
              Я спокоен &rarr; я уверен (актерский навык - умение действовать
              перед аудиторией)
            </li>
            <li className={styles.listBenefitsItem}>
              Поверь в себя! (Я знаю свои сильные стороны &rarr; умею их
              применять)
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.wrapperBtn}>
        <ButtonW />
      </div>
    </article>
  );
};
