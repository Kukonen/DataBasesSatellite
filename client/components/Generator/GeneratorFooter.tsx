import styles from "../../styles/Generator.module.scss";

const GeneratorFooter = () => {
    return (
        <div
            id="GeneratorFooterElement"
            className={styles.GeneratorFooter}
        >
            <div className={styles.GenerateButton}>Generate!</div>
        </div>
    )
}

export default GeneratorFooter;