import styles from "./styles.module.sass";

export const SwiperWebItem = ({ review, setModalData}) => {



  return (
    <>
      <div className={styles.reviewItem} >
        <img src={review} alt="" className={styles.reviewImg} onClick={() => setModalData(review)}/>
      </div>
      
      
    </>
  );
};
