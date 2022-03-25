import styles from "../../styles/DataBasePage.module.scss";
import Link from "next/link";
import classNames from "classnames";

const Index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headline}>
                SQL
            </div>
            <div className={classNames(styles.link, styles.sql)}>
                <Link href={'/sql/docs'}>
                    <a>Docs</a>
                </Link>
            </div>
            <div className={classNames(styles.link, styles.sql)}>
                <Link href={'/generator'}>
                    <a>Generator</a>
                </Link>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.text}>
                <div>
                    SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system.
                </div>
            </div>
        </div>
    )
}

export default Index;