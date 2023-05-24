import styles from './styles.module.sass';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

export const Slider = ({ data, cross = false }) => {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.sliderContainer}
        //   rewind={true}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.sliderItem} key={index}>
              <div
                className={
                  cross ? styles.element__iconCross : styles.element__iconCheck
                }
              />
              <p className={styles.sliderText}>{item}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
