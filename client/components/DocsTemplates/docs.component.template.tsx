import styles from '../../styles/DocsComponent.module.scss';
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

interface ComponentTemplateProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    children: ReactNode;
}

const ComponentTemplate = ({title, children, ...props} : ComponentTemplateProps) : JSX.Element => {
    return (
        <div className={styles.container} {...props}>
            <div className={styles.headline}>
                {title.toUpperCase()}
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default ComponentTemplate;