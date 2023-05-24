import styles from "./styles.module.sass";
import { howToFindData } from "../../data/data";
import useMediaQuery from "../../utils/useMediaQuery";
import { Slider } from "./Slider";

export const HowToFind = () => {

    const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <section className={styles.howToFind} id="tips">
      <div className={styles.howToFindWrapper}>
        <h2 className={styles.title}>
          Как найти хорошего специалиста по речи:
        </h2>
        <article className={styles.wrapper}>
            {!isMobile ?<ul className={styles.list}>
            {howToFindData[0].map((el, index) => (
              <li className={styles.item} key={index}>
                {" "}
                <div className={styles.element__iconCheck} /> <p >{el}</p>
              </li>
            ))}
          </ul> : <Slider data={howToFindData[0]}/> }
          

          {!isMobile ?<ul className={styles.list}>
            {howToFindData[1].map((el, index) => (
              <li className={styles.item} key={index}>
                {" "}
                <div className={styles.element__iconCross} /> <p>{el}</p>
              </li>
            ))}
          </ul> : <Slider data={howToFindData[1]} cross/> }
        </article>
      </div>
    </section>
  );
};
