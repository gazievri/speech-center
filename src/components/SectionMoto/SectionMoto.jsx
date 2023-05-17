import styles from "./styles.module.sass";

export const SectionMoto = ({text}) => {
    return(
        <section className={styles.sectionMoto}>{text}</section>
    )
}