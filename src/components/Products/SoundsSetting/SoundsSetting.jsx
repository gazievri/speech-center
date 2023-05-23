import styles from './styles.module.sass';
import { ButtonW } from '../../ButtonW/Button';
// import video from '../../../assets/video/postanovka.mp4'

export const SoundSetting = () => {
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>Не понимают, что вы говорите?</h2>
      <p className={styles.text}>
        <span className={styles.spanBlue}>Звук</span>, которого не было,
        <span className={styles.spanBlue}> обязательно появится</span> благодаря
        четким тренингам.
      </p>
      <div className={styles.conteinerOne}>
        {/* <video
          src=""
          className={styles.video}
          type="video/mp4"
          controls
          muted
        >
          <p>
            Ваш браузер не поддерживает встроенные видео. Вы сможете просмотреть
            его
            <a href="https://youtu.be/8CRgA5fB7bA">этой ссылке</a>.
          </p>
        </video> */}

        <iframe
          width="540"
          height="301"
          src="https://www.youtube.com/embed/RNC4q41oNZw"
          title="Постановка звуков"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div className={styles.textContainer}>
          <p className={styles.textVideo}>
            Теперь Сергей Михайлович легко общается и дарит людям энергию,
            которая копилась в нём долгие годы страха перед «своими
            недостатками» и дефектами речи
          </p>
        </div>
      </div>
      <div className={styles.conteinerTwo}>
        <div>
          <h3 className={styles.textCta}>Вы получите:</h3>
          <p className={styles.textCtaBlue}>Полный протокол обследования</p>
          <ul className={styles.listBenefits}>
            <li className={styles.listBenefitsItem}>
              Подготовка к рождению звука
            </li>
            <li className={styles.listBenefitsItem}>Постановка</li>
            <li className={styles.listBenefitsItem}>
              Автоматизация (внедряем звук в повседневную жизнь)
            </li>
            <li className={styles.listBenefitsItem}>
              Дифференциация (навык произнесения звука в сложных
              словосочетаниях)
            </li>
          </ul>
        </div>

        <div className={styles.priceBlock}>
          <p className={styles.price}>2600 ₽</p>
          <p className={styles.time}>60 минут</p>
          <div className={styles.discountsBlock}>
            <h4 className={styles.discountsTitle}>Скидки:</h4>
            <ul>
              <li className={styles.discountsItem}>
                Многодетные семьи - 200 ₽
              </li>
              <li className={styles.discountsItem}>Инвалиды - 200 ₽</li>
              <li className={styles.discountsItem}>Ветераны - 300 ₽</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.wrapperBtn}>
        <ButtonW />
      </div>
    </article>
  );
};
