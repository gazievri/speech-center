import styles from './styles.module.sass';
import { ButtonW } from '../../ButtonW/Button';

export const Dysarthria = () => {
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>
        Дизартрия, дисграфия, дислексия, дислалия,
        <br />
        ОНР (3 уровня), Афазия, ДЦП, ФФНР
      </h2>

      <div className={styles.conteinerOne}>
        <div className={styles.textBlock}>
          <h3 className={styles.textBlockTitle}>
            Обязательно свяжитесь с нами!
          </h3>
          <p className={styles.textBlockParagraph}>
            Мы подробно обсуждаем каждый случай и подбираем наилучшую
            индивидуальную программу
          </p>
        </div>

        <div className={styles.priceBlock}>
          <h3 className={styles.price}>Цена обсуждается индивидуально</h3>
          <div className={styles.discounts}>
            <h4 className={styles.discountsTitle}>Скидки:</h4>
            <ul>
              <li className={styles.discountsItem}>
                Многодетные семьи - 200 ₽
              </li>
              <li className={styles.discountsItem}>Инвалиды - 200 ₽</li>
              <li className={styles.discountsItem}>Ветераны - 300 ₽</li>
            </ul>
          </div>
          <ButtonW />
        </div>
      </div>

      <div className={styles.containerTwo}>
        <iframe
          width="540"
          height="301"
          src="https://www.youtube.com/embed/asbB8OPjh3g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div className={styles.videoTextBlock}>
          <h4 className={styles.listVideoTitle}>Знакомьтесь, Алексей!</h4>
          <ul className={styles.listVideo}>
            <li className={styles.listVideoItem}>55 лет</li>
            <li className={styles.listVideoItem}>Афазия</li>
            <li className={styles.listVideoItem}>Потерял дар речи</li>
            <li className={styles.listVideoItem}>И вот мы снова в первый класс!</li>
            <li className={styles.listVideoItem}>Работаем сложно, упорно, эффективно</li>
          </ul>
        </div>
      </div>
      <p className={styles.textOneExample}>И это только один из примеров!</p>
    </article>
  );
};