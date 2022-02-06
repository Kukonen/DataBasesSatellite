import Link from "next/link";
import {ReactElement, ReactNode} from "react";
import styles from '../styles/DocsTemplate.module.scss';

interface DocsTemplateProps {
    sections: {
        title: string;
        names: string[];
    }[];
    children: ReactNode;
}

const DocsTemplate = ({sections, children} : DocsTemplateProps) : ReactElement => {

    const NavBarElements = sections.map(section => {

        const NavBarItems = section.names.map(name => {
            return (
                <div className={styles.navbarItem}>
                    {name}
                </div>
            )
        })

        return (
            <div className={styles.navbarSection}>
                <div className={styles.navbarTitle}>
                    {section.title}
                </div>
                <div className={styles.navbarItems}>
                    {NavBarItems}
                </div>
            </div>
        )
    })

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                {NavBarElements}
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default DocsTemplate;