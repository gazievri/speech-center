import { Contacts } from '../components/Contacts/Contacts';
import { Hero } from '../components/Hero/Hero';
import { HowToFind } from '../components/HowToFind/HowToFind';
import { SectionMoto } from '../components/SectionMoto/SectionMoto';
import { Products } from '../components/Products/Products';
import { WithYou } from '../components/WithYou/WithYou';
import { ReviewSwiper } from '../components/ReviewSwiper/ReviewSwiper';
import { Author } from '../components/Author/Author';

export const Home = () => {
  return (
    <>
      <Hero />
      <SectionMoto text='Татьяна - ваш эксклюзивный специалист' />
      <Products />
      <SectionMoto text='И помните - главное начать' second/>
      <HowToFind />
      <ReviewSwiper />
      <Author />
      <WithYou />
      <Contacts />
    </>
  );
};
