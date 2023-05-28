import styles from './styles.module.sass';
import { ButtonW } from '../../ButtonW/Button';
// import video from '../../../assets/video/sounds.mp4';
import useMediaQuery from '../../../utils/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

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
            modules={[Navigation]}
            className={styles.swiperContainer}
            navigation={true}
          >


            <SwiperSlide>
              <div className={styles.video}>
                <div className={styles.videoWrp}>
                  <iframe
                    src="https://player.vimeo.com/video/304680887?h=dc77fb0bc6&amp;dnt=1&amp;app_id=122963"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen=""
                    title="Otziv1"
                    className={styles.vimeoIframe}
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.video}>
                <div className={styles.videoWrp}>
                  <iframe
                    src="https://player.vimeo.com/video/831030555?h=1c81800823"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    title="dizartriya-1"
                    className={styles.vimeoIframe}
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.video}>
                <div className={styles.videoWrp}>
                  <iframe
                    src="https://player.vimeo.com/video/831030546?h=b6d885c1b9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullscreen
                    title="dizartriya-2"
                    className={styles.vimeoIframe}
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
