import styles from './Main.module.sass';
import { Home } from '../../pages/Home';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
};
