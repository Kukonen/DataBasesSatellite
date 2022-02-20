import styles from "../../styles/DocsTemplate.module.scss";
import Link from "next/link";
import {section} from "../NavBarSections/sectionsInterface";
import {DataBasesTypes} from "./docs.template";
import {ReactElement} from "react";
import {getSection, getStyles, getPathPrefix} from "./docs.template";
import {mongodb} from "../NavBarSections/mongodb";


interface DocsTemplateNavbar {
    database: DataBasesTypes;
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