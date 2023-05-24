import styles from './styles.module.sass';
import img from '../../assets/images/withYou.jpg';

export const WithYou = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Мы с Вами!</h2>

      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={img} alt="" className={styles.img} />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.textHeader}>
            Окружающим бывает сложно понять, что вы говорите?
          </p>

          <p className={styles.text}>
            У вас в голове куча идей и интересных мыслей, но вам не хватает
            выразительных средств, чтобы донести их до вашего слушателя? Вы
            чувствуете внутри себя прекрасные лидерские качества, но не знаете,
            как привлечь внимание слушателя? Вы стесняетесь своей речи? Так вот!
            <span className={styles.textBold}>
              {' '}
              Ваша речь может быть прекрасной!
            </span>
          </p>

          <p className={styles.text}>
            Ваши уникальные мысли и идеи обязаны быть услышаны, так как никто
            кроме Вас не подарит их миру!{' '}
            <span className={styles.textBold}>
              Слово — главное оружие лидера
            </span>
            , владение которым, можно сделать легким и вдохновляющим!
          </p>

          <p className={styles.text}>
            <span className={styles.textBold}>
              Знайте, — Ваш голос неповторим
            </span>
            , и раскрыть многогранность его звучания, красоту и мелодику мы
            сможем вместе! Со многими нашими клиентами мы общаемся долгое время
            — делимся опытом, ходим вместе на концерты, спектакли, в музеи,
            поздравляем друг друга с праздниками…
          </p>

          <p className={styles.text}>
            Так, в доверительных отношениях, мы проявляем высокий уровень
            профессионализма и достигаем блестящих результатов!
          </p>
        </div>
      </div>
      <div className={styles.roundOne} />
      <div className={styles.roundTwo} />
    </section>
  );
};
