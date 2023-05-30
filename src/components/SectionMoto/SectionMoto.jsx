import styles from './styles.module.sass';

export const SectionMoto = ({ text, second = false }) => {
  return (
    <section className={second ? styles.sectionMotoSecond : styles.sectionMoto}>
      {text} {second && <div className={styles.round} />}
    </section>
  );
};
