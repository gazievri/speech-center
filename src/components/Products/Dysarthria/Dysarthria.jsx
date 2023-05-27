import styles from './styles.module.sass';
import { ButtonW } from '../../ButtonW/Button';
// import video from '../../../assets/video/sounds.mp4';
import useMediaQuery from '../../../utils/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

export const Dysarthria = () => {
  const isTablet = useMediaQuery('(max-width: 1000px)');

  return (
    <article className={styles.container}>
      <h2 className={styles.title}>
        Дизартрия, дисграфия, дислексия, дислалия,
        <br />
        ОНР (3 уровня), Афазия, ДЦП, ФФНР
      </h2>

      <div className={styles.containerTwo}>
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Pagination]}
            className={styles.swiperContainer}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <div className={styles.video}>
                <div className={styles.videoWrp}>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/34vBnj9-XOU"
                    title="Дизартрия"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.video}>
                <div className={styles.videoWrp}>
                  <iframe
                    width="100%"
                    height="649"
                    src="https://www.youtube.com/embed/nVPy9J5e9js"
                    title="Дизартрия"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.videoTextBlock}>
          <h4 className={styles.listVideoTitle}>Знакомьтесь, Алексей!</h4>
          <ul className={styles.listVideo}>
            <li className={styles.listVideoItem}>55 лет</li>
            <li className={styles.listVideoItem}>Афазия</li>
            <li className={styles.listVideoItem}>Потерял дар речи</li>
            <li className={styles.listVideoItem}>
              И вот мы снова в первый класс!
            </li>
            <li className={styles.listVideoItem}>
              Работаем сложно, упорно, эффективно
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.textOneExample}>И это только один из примеров!</p>

      <div className={styles.conteinerOne}>
        <div className={styles.textBlock}>
          <h3 className={styles.textBlockTitle}>
            Обязательно свяжитесь с нами!
          </h3>
          <p className={styles.textBlockParagraph}>
            Мы подробно обсуждаем каждый случай и подбираем наилучшую
            индивидуальную программу
          </p>
        </div>

        {!isTablet && (
          <div className={styles.priceBlock}>
            <h3 className={styles.price}>Цена обсуждается индивидуально</h3>
            <div className={styles.discounts}>
              <h4 className={styles.discountsTitle}>Скидки:</h4>
              <ul>
                <li className={styles.discountsItem}>
                  Многодетные семьи - 200 ₽
                </li>
                <li className={styles.discountsItem}>Инвалиды - 200 ₽</li>
                <li className={styles.discountsItem}>Ветераны - 300 ₽</li>
              </ul>
            </div>
            <ButtonW />
          </div>
        )}
      </div>

      {isTablet && (
        <>
          <div className={styles.priceBlock}>
            <h3 className={styles.price}>Цена обсуждается индивидуально</h3>
            <div className={styles.discounts}>
              <h4 className={styles.discountsTitle}>Скидки:</h4>
              <ul className={styles.discountsItem}>
                <li className={styles.discountsItem}>
                  Многодетные семьи - 200 ₽
                </li>
                <li className={styles.discountsItem}>Инвалиды - 200 ₽</li>
                <li className={styles.discountsItem}>Ветераны - 300 ₽</li>
              </ul>
            </div>
          </div>
          <div className={styles.btnWrapper}>
            <ButtonW />
          </div>
        </>
      )}
    </article>
  );
};
