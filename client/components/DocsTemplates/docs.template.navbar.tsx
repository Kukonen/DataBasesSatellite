import styles from "../../styles/DocsTemplate.module.scss";
import Link from "next/link";
import {section} from "../NavBarSections/sectionsInterface";
import {DataBasesTypes} from "./docs.template";
import {ReactElement} from "react";

import {mongodb} from "../NavBarSections/mongodb";


interface DocsTemplateNavbar {
    database: DataBasesTypes;
}

// get link's text and path
const getSection = (database: DataBasesTypes):section[] => {
    if (database === "mongodb") {
        return mongodb
    }
    if (database === "mysql") {
        return mongodb
    }
    if (database === "postgresql") {
        return mongodb
    }

    return [];
}

// Link styles
const getStyles = (database: DataBasesTypes) => {

    let style = styles.navbarTitleLink;

    if (database === "mongodb") {
        style = styles.mongodb
    }
    if (database === "mysql") {
        style = styles.mysql
    }
    if (database === "postgresql") {
        style = styles.postgresql
    }

    return style;
}

// get prefix like '/mongodb/docs for links go to correct absolute path
const getPathPrefix = (database: DataBasesTypes):string => {
    let prefix = "/";

    if (database === "mongodb") {
        prefix += "mongodb"
    }
    if (database === "mysql") {
        prefix += "mysql"
    }
    if (database === "postgresql") {
        prefix += "postgresql"
    }

    prefix += "/docs/"

    return prefix;
}

const DocsTemplateNavbar = ({database} : DocsTemplateNavbar):ReactElement => {

    const sections:section[] = getSection(database);

    const linkStyle = getStyles(database);

    const prefix = getPathPrefix(database)

    const NavBar = sections.map(section => {
        const NavBarItems = section.names.map(name => {
            return (
                <div className={styles.navbarItem}>
                    <Link href={prefix + section.link + "/" + name.link}>
                        <a className={linkStyle}>{name.text}</a>
                    </Link>
                </div>
            )
        })

        return (
            <div className={styles.navbarSection}>
                <div className={styles.navbarTitle}>
                    <Link href={prefix + section.link}>
                        <a className={linkStyle}>{section.title}</a>
                    </Link>
                </div>
                <div className={styles.navbarItems}>

                    {NavBarItems}
                </div>
            </div>
        )
    })

    return (
        <div className={styles.navbar}>
            {NavBar}
        </div>
    );
}

export default DocsTemplateNavbar;