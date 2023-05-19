import styles from './styles.module.sass';

export const ButtonW = () => {
  return (
    <a
      className={styles.btn}
      href="https://wa.me/79306697700?text=Здравствуйте! "
      target="_blank"
      rel="noreferrer"
    >
      Написать в WhatsApp
    </a>
  );
};
