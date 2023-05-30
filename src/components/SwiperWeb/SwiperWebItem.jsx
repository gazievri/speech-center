import styles from './styles.module.sass';

export const SwiperWebItem = ({ review, isHorizontal = false, setModalData }) => {
  
  return (
    <>
      <div className={styles.reviewItem}>
        <img
          src={review}
          alt=""
          className={isHorizontal ? styles.reviewImgHorizontal : styles.reviewImgVertical}
          onClick={() => setModalData(review)}
        />
      </div>
    </>
  );
};
