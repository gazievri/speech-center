import styles from './styles.module.sass';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import useMediaQuery from '../../utils/useMediaQuery';

export const Contacts = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <section className={styles.contacts} id="contacts">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A74fc46ef33f0794780fe760e41ed843fd9cb642dd1647d04694afa788e9dc657&amp;source=constructor"
        width={!isMobile ? '536' : '100%'}
        height={!isMobile ? '355' : '300'}
        frameBorder="0"
      ></iframe>

      <div className={styles.wrapper}>
        <h2 className={styles.title}>Контакты</h2>
        <p className={styles.text}>
          Ждем Вас! Мы работаем с 9 утра до 10 вечера каждый день.
        </p>
        <ContactsList contacts />
      </div>
      <div className={styles.round}></div>
    </section>
  );
};
