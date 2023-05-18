import styles from "./styles.module.sass";
export const ReviewSwiperItem = ({ review }) => {
  return (
    <div className={styles.reviewItem}>
      <img src={review} alt="" className={styles.reviewImg} />
    </div>
  );
};
