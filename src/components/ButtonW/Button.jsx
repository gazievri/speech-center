import styles from './styles.module.sass';

export const ButtonW = () => {
  return (
    <a
      className={styles.btn}
      href="https://wa.me/79683829463?text=Здравствуйте,%20Татьяна!"
      target="_blank"
      rel="noreferrer"
    >
      Написать в WhatsApp
    </a>
  );
};
