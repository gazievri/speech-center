import styles from './styles.module.sass'
import { howToFindData } from '../../data/data'


export const HowToFind = () => {

    return (
        <section className={styles.howToFind}>
            <h2 className={styles.title}>Как найти хорошего специалиста по речи:</h2>
            <article className={styles.wrapper}>

                <ul className={styles.list}>

                {howToFindData[0].map((el, index) => <li className={styles.item} key={index}> <div className={styles.element__iconCheck}/> <p>{el}</p></li>)}
                    
                </ul>

                <ul className={styles.list}>
                {howToFindData[1].map((el, index) => <li className={styles.item}key={index}> <div className={styles.element__iconCross}/> <p>{el}</p></li>)}
                </ul>



            </article>


        </section>
    )
}