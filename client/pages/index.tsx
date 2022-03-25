import type { NextPage } from 'next'
import Image from "next/image";
import styles from '../styles/Home.module.scss'
import Link from "next/link";
import classNames from "classnames";

import MongoDbLogo from '../public/mongodb.logo.svg';
import MYQSLLogo from '../public/mysql.logo.svg';
import PostgreSQLLogo from '../public/postgresql.logo.svg';
import SQLLogo from '../public/SQL.logo.svg';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>

      <div id={styles.headline}>SYNTAX, EXAMPLES, AND COMMAND GENERATION FOR</div>
      <div className={styles.section}>
        <div className={styles.textBlock}>
            <div className={styles.textBlockTitle}>
                MongoDB
            </div>
            <Link href="/mongodb/docs">
                <a
                    className={classNames(styles.link, styles.mongodb)}
                >Docs</a>
            </Link>
            <Link href="/generator">
                <a
                    className={classNames(styles.link, styles.mongodb)}
                >Generator</a>
            </Link>
        </div>
        <div className={styles.imageBlock}>
            <Image src={MongoDbLogo} className={styles.image} />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.imageBlock}>
            <Image src={MYQSLLogo} className={styles.image} />
        </div>
        <div className={styles.textBlock}>
            <div className={styles.textBlockTitle}>
                MYSQL
            </div>
            <Link href="/mysql/docs">
                <a
                    className={classNames(styles.link, styles.mysql)}
                >Docs</a>
            </Link>
            <Link href="/generator">
                <a
                    className={classNames(styles.link, styles.mysql)}
                >Generator</a>
            </Link>
        </div>
      </div>
        <div className={styles.section}>
            <div className={styles.textBlock}>
                <div className={styles.textBlockTitle}>
                    PostgreSQL
                </div>
                <Link href="/mongodb/docs">
                    <a
                        className={classNames(styles.link, styles.postgresql)}
                    >Docs</a>
                </Link>
                <Link href="/generator">
                    <a
                        className={classNames(styles.link, styles.postgresql)}
                    >Generator</a>
                </Link>
            </div>
            <div className={styles.imageBlock}>
                <Image src={PostgreSQLLogo} className={styles.image}/>
            </div>
        </div>
        <div className={styles.section}>
            <div className={styles.imageBlock}>
                <Image src={SQLLogo} className={styles.image}/>
            </div>
            <div className={styles.textBlock}>
                <div className={styles.textBlockTitle}>
                    SQL
                </div>
                <Link href="/sql/docs">
                    <a
                        className={classNames(styles.link, styles.sql)}
                    >Docs</a>
                </Link>
                <Link href="/generator">
                    <a
                        className={classNames(styles.link, styles.sql)}
                    >Generator</a>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home
