import styles from "./styles.module.sass";
export const SwiperWebItem = ({ review}) => {

  return (
    <>
      <div className={styles.reviewItem} >
        <img src={review} alt="" className={styles.reviewImg} />
      </div>
    </>
  );
};
