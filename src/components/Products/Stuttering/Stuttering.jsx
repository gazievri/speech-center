import styles from './styles.module.sass';
import { ButtonW } from '../../ButtonW/Button';
import useMediaQuery from '../../../utils/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Pagination } from 'swiper';

export const Stuttering = () => {
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <article className={styles.container}>
      <h2 className={styles.title}>Заикание</h2>
      <p className={styles.text}>Татьяна не просто логопед, она:</p>
      <p className={styles.textBlueLogoped}>
        Логопед + педагог по сценической речи ={' '}
        <span className={styles.spanLogoped}>мультиспециалист</span>
      </p>
      <h3 className={styles.text}>Посещая занятия Татьяны, вы получите:</h3>
      <div className={styles.wrapper}>
        <ul className={styles.listBenefits}>
          <li className={styles.listBenefitsItem}>Тренинги по логопедии</li>
          <li className={styles.listBenefitsItem}>
            Актерские речевые тренинги
          </li>
          <li className={styles.listBenefitsItem}>Дыхательные тренинги</li>
          <li className={styles.listBenefitsItem}>Работа с тембром голоса</li>
          <li className={styles.listBenefitsItem}>Расслабляющий логомассаж</li>
          <li className={styles.listBenefitsItem}>Техника плавной речи</li>
        </ul>
        <div className={styles.priceBlock}>
          <p className={styles.price}>2700 ₽</p>
          <p className={styles.time}>60 минут</p>
          <p className={styles.abonement}>15000 ₽ - абонемент 6 занятий</p>
          <div className={styles.discountsBlock}>
            <h4 className={styles.discountsTitle}>Скидки:</h4>
            <ul>
              <li className={styles.discountsItem}>
                Многодетные семьи - 200 ₽
              </li>
              <li className={styles.discountsItem}>Инвалиды - 200 ₽</li>
              <li className={styles.discountsItem}>Ветераны - 300 ₽</li>
            </ul>
          </div>
        </div>
        <div className={styles.circleOne} />
      </div>

      <p className={styles.text}>
        Собран комплекс упражнений, который дает действительный результат.
        <br />
        Это <span className={styles.spanBlue}>авторский</span> метод Татьяны.
      </p>

      <div className={styles.content}>

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
                    src="https://www.youtube.com/embed/XjiImjvbpfk"
                    title="Заикание"
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
                    src="https://www.youtube.com/embed/Tb7RQacYNN0"
                    title="Заикание"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.circleThree} />
        {/* <div className={styles.textBlockVideo}> */}
        <h3 className={styles.text}>
          После нескольких занятий люди часто говорят:
        </h3>
        <ul className={styles.listParagraphs}>
          <li>
            <p className={styles.text}>
              «Татьяна, наконец-то, я нашла вас - настоящего специалиста!»
            </p>
            <p className={styles.textBlue}>Поверьте, так скажете и вы!</p>
          </li>
          <li>
            <p className={styles.text}>
              «Да ладно, я привык к запинкам и знакомые привыкли»
            </p>
            <p className={styles.textBlue}>
              Это неправда! И вы об этом знаете.
            </p>
          </li>
        </ul>

        <p className={styles.textFinal}>
          <span className={styles.spanBlack}>К чему вы привыкли?</span> К тому,
          что каждый раз у кассы в магазине испытываете напряжение, перед тем,
          как скажете: «пакет, пожалуйста»? К тому, что вашего ребенка дразнят в
          школе?
        </p>

        <p className={styles.textCTA}>Пишите нам в ватсап. Мы поможем.</p>

        <p className={styles.textFinal}>
          Вы получите неоценимое удовольствие от ощутимых результатов! Увидите,
          как радуются вашим успехам близкие. Освободитесь от оков заикания и
          испытаете радость новой жизни.
        </p>
        {/* </div> */}
      </div>
      <div className={styles.wrapperBtn}>
        <ButtonW />
        <div className={styles.circleTwo} />
      </div>
    </article>
  );
};
