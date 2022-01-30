import styles from '../styles/DataBasePage.module.scss'
import Link from "next/link";
import classNames from "classnames";

const MongoDB = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headline}>
                MongoDB
            </div>
            <div className={classNames(styles.link, styles.mongodb)}>
                <Link href={'/mongodb/docs'}>
                    <a>Docs</a>
                </Link>
            </div>
            <div className={classNames(styles.link, styles.mongodb)}>
                <Link href={'/mongodb/docs'}>
                    <a className={styles.mongodb}>Generator</a>
                </Link>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.text}>
                <div>
                    MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program.
                </div>
            </div>
        </div>
    )
}

export default MongoDB;