import {ReactElement, ReactNode} from "react";
import styles from '../../styles/DocsTemplate.module.scss';
import DocsTemplateNavbar from "./docs.template.navbar";
import ComponentTemplate from "./docs.component.template";
import SwitchPage from "./docs.switchpage";
import {section} from "../NavBarSections/sectionsInterface";
import {mongodb} from "../NavBarSections/mongodb";
import {mysql} from "../NavBarSections/mysql";
import {postgresql} from "../NavBarSections/postgresql";
import {sql} from "../NavBarSections/sql";

export type DataBasesTypes = 'mongodb' | 'postgresql' | 'mysql' | 'sql';

interface DocsTemplateProps {
    database: DataBasesTypes;
    title: string;
    children: ReactNode;
}

// get link's text and path
export const getSection = (database: DataBasesTypes):section[] => {
    if (database === "mongodb") {
        return mongodb
    }
    if (database === "mysql") {
        return mysql
    }
    if (database === "postgresql") {
        return postgresql
    }
    if (database === "sql") {
        return sql;
    }

    return [];
}

// Link styles
export const getStyles = (database: DataBasesTypes) => {

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
    if (database === "sql") {
        style = styles.sql
    }

    return style;
}

// get prefix like '/mongodb/docs for links go to correct absolute path
export const getPathPrefix = (database: DataBasesTypes):string => {
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
    if (database === "sql") {
        prefix += "sql"
    }

    prefix += "/docs/"

    return prefix;
}

const DocsTemplate = ({database, title, children} : DocsTemplateProps) : ReactElement => {

    return (
        <div className={styles.container}>
            <DocsTemplateNavbar database={database} />
            <div className={styles.content}>
                <ComponentTemplate title={title} >
                    {children}
                </ComponentTemplate>
                <SwitchPage database={database}/>
            </div>
        </div>
    )
}

export default DocsTemplate;