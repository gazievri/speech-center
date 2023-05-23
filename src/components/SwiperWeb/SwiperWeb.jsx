import styles from "./styles.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import { Navigation } from "swiper";
import { SwiperWebItem } from "./SwiperWebItem";
import { Modal } from "../Modal/Modal";
import { useState } from "react";


export const SwiperWeb = ({title = '', data}) => {
  const [modalData, setModalData] = useState('')



  const closeModal =() => {
    setModalData('')
  }
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
              <SwiperWebItem review={item} setModalData={setModalData} />
            </SwiperSlide>
          ))}
        </Swiper>
        {modalData && <Modal data={modalData} setModalData={setModalData}/>}
        <div className={styles.round} />
      </div>
    </section>
  );
};
