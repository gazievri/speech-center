import { Contacts } from '../components/Contacts/Contacts';
import { Hero } from '../components/Hero/Hero';
import { HowToFind } from '../components/HowToFind/HowToFind';

export const Home = () => {
  return (
    <>
      <Hero />
      <HowToFind />
      <Contacts />
    </>
  );
};
