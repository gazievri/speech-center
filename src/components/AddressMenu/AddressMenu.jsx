import styles from './styles.module.sass';

export const AddressMenu = ({ isAddressOff, setIsAddressOff }) => {
  return (
    <div className={isAddressOff ? styles.addressOff : styles.address}>
      <a className={styles.link} href="tel:+79636942941" rel="noreferrer">
        <div className={styles.iconPhone} />
        +7 (963) 694 29 41
      </a>

      <a
        className={styles.link}
        target="_blank"
        rel="noreferrer"
        href="https://yandex.ru/maps/-/CCUoMSaO2C"
      >
        <div className={styles.iconPlace} />
        Калашный переулок, 5
      </a>
    </div>
  );
};
