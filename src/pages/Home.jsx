import { Contacts } from '../components/Contacts/Contacts';
import { Hero } from '../components/Hero/Hero';
import { HowToFind } from '../components/HowToFind/HowToFind';
import { SectionMoto } from '../components/SectionMoto/SectionMoto';
import { Products } from '../components/Products/Products';
import { WithYou } from '../components/WithYou/WithYou';
import { SwiperWeb } from '../components/SwiperWeb/SwiperWeb';
import { Author } from '../components/Author/Author';
import { reviewData } from "../data/data";
import { CERTIFICATES_DATA } from '../data/certificate/certificates';
import useMediaQuery from "../utils/useMediaQuery";
import { SwiperMob } from '../components/SwiperWeb/SwiperMob';

export const Home = () => {

  const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <>
      <Hero />
      <SectionMoto text='Татьяна - ваш эксклюзивный специалист' />
      <Products />
      <SectionMoto text='И помните - главное начать' second/>
      <HowToFind />
      {isMobile ? <SwiperMob data={reviewData} title='Наши отзывы, написанные "живой рукой"'/> : <SwiperWeb data={reviewData} title='Наши отзывы, написанные "живой рукой"'/>}
      
      <Author />
      {isMobile ? <SwiperMob data={CERTIFICATES_DATA} title='Сертификаты'/> : <SwiperWeb data={CERTIFICATES_DATA} title='Сертификаты'/>}
      <WithYou />
      <Contacts />
    </>
  );
};
