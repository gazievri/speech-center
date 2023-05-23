import styles from "./styles.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import { Navigation } from "swiper";
import { SwiperWebItem } from "./SwiperWebItem";

export const SwiperWeb = ({title = '', data}) => {
  return (
    <section className={styles.section} id="reviews">
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.reviewWrapper}>
        <Swiper
          modules={[Navigation]}
          className={styles.swiperContainer}
          navigation={true}
          //   rewind={true}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <SwiperWebItem review={item}  />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.round} />
      </div>
    </section>
  );
};
