import { useEffect } from 'react';
import styles from './styles.module.sass';

export const Modal = ({ data, setModalData }) => {
  useEffect(() => {
    window.addEventListener('scroll', () => setModalData(''));
  }, []);

  return (
    <div className={styles.modal} onClick={() => setModalData('')}>
      <div className={styles.close} />

      <img src={data} alt="" className={styles.img} />
    </div>
  );
};
