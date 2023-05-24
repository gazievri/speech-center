import styles from './styles.module.sass';
import img from '../../assets/images/author.webp';
// import icon from '../../assets/icons/check.svg';

export const Author = () => {
  return (
    <section className={styles.section} id="author">
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={img} alt="" />
      </div>
      <article className={styles.article}>
        <div className={styles.textWrapper}>
          {' '}
          <div className={styles.textIcon} />{' '}
          <p className={styles.text}>
            Татьяна профессионально занимается речью 15 лет
          </p>
        </div>
        <div className={styles.textWrapper}>
          {' '}
          <div className={styles.textIcon} />{' '}
          <p className={styles.text}>
            1000+ человек достигли долгожданных успехов
          </p>
        </div>
        <div className={styles.textWrapper}>
          {' '}
          <div className={styles.textIcon} />{' '}
          <p className={styles.text}>
            Авторские методики (собирает и совершенствует действенными методики
            для вас)
          </p>
        </div>
        <div className={styles.textWrapper}>
          {' '}
          <div className={styles.textIcon} />{' '}
          <p className={styles.text}>
            Логопед + педагог сценической речи + тренер по ораторскому искусству
            = мультиспециалист (вот бы в медицине так, ведь, все взаимосвязано)
          </p>
        </div>
      </article>
      <div className={styles.roundOne} />
      <div className={styles.roundTwo} />
    </section>
  );
};
