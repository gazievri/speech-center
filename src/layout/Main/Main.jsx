import styles from './Main.module.sass';
import { Home } from '../../Pages/Home';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
};
