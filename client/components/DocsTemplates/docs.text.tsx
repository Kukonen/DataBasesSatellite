import style from "../../styles/DocsComponent.module.scss";
import {ReactNode} from "react";

interface DocsTextProps {
    children: ReactNode;
}

const DocsText = ({children} : DocsTextProps) => {
    return (
        <div className={style.contentText}>
            {children}
        </div>
    )
}

export default DocsText;