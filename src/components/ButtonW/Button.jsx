import styles from './styles.module.sass';

export const ButtonW = () => {
  return (
    <a
      className={styles.btn}
      href="https://wa.me/7930669770?text=Здравствуйте!"
      target="_blank"
      rel="noreferrer"
    >
      Написать в WhatsApp
    </a>
  );
};
