import Link from "next/link";
import {ReactElement, ReactNode} from "react";
import styles from '../../styles/DocsTemplate.module.scss';
import DocsTemplateNavbar from "./docs.template.navbar";
import ComponentTemplate from "./docs.component.template";

export type DataBasesTypes = 'mongodb' | 'postgresql' | 'mysql';

interface DocsTemplateProps {
    database: DataBasesTypes;
    title: string;
    children: ReactNode;
}

const DocsTemplate = ({database, title, children} : DocsTemplateProps) : ReactElement => {

    return (
        <div className={styles.container}>
            <DocsTemplateNavbar database={database} />
            <div className={styles.content}>
                <ComponentTemplate title={title} >
                    {children}
                </ComponentTemplate>
            </div>
        </div>
    )
}

export default DocsTemplate;