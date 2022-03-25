import styles from "../../styles/DataBasePage.module.scss";
import Link from "next/link";
import classNames from "classnames";

const Index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headline}>
                PostgreSQL
            </div>
            <div className={classNames(styles.link, styles.postgresql)}>
                <Link href={'/postgresql/docs'}>
                    <a>Docs</a>
                </Link>
            </div>
            <div className={classNames(styles.link, styles.postgresql)}>
                <Link href={'/generator'}>
                    <a>Generator</a>
                </Link>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.text}>
                <div>
                    PostgreSQL also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database.
                </div>
            </div>
        </div>
    )
}

export default Index;