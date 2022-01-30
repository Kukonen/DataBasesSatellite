import styles from "../../styles/DataBasePage.module.scss";
import Link from "next/link";
import classNames from "classnames";

const Index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headline}>
                MySQL
            </div>
            <div className={classNames(styles.link, styles.mysql)}>
                <Link href={'/mysql/docs'}>
                    <a>Docs</a>
                </Link>
            </div>
            <div className={classNames(styles.link, styles.mysql)}>
                <Link href={'/mysql/docs'}>
                    <a>Generator</a>
                </Link>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.text}>
                <div>
                    MySQL is an open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language. A relational database organizes data into one or more data tables in which data types may be related to each other; these relations help structure the data.
                </div>
            </div>
        </div>
    )
}

export default Index;