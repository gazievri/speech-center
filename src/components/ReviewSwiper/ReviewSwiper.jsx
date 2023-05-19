import styles from "./styles.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import { Navigation } from "swiper";
import { reviewData } from "../../data/data";
import { ReviewSwiperItem } from "./ReviewSwiperItem";

export const ReviewSwiper = () => { 
  return (
    <section className={styles.section} id="reviews">
      <h2 className={styles.title}>Наши отзывы, написанные "живой рукой"</h2>

      <div className={styles.reviewWrapper}>
        <Swiper
          //   grabCursor={true}
          //   centeredSlides={true}
          //   slidesPerView={1}
          modules={[Navigation]}
          className={styles.swiperContainer}
          navigation={true}
          //   rewind={true}
          
        >
          {reviewData.map((item, index) => (
            <SwiperSlide key={index}>
              <ReviewSwiperItem review={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.round}/>
       
      </div>
    </section>
  );
};
