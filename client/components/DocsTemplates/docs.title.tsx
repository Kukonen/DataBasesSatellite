import style from "../../styles/DocsComponent.module.scss";
import {ReactNode} from "react";

interface DocsTitleProps {
    children: ReactNode;
}

const DocsTitle = ({children} : DocsTitleProps) => {
    return (
        <div className={style.contentHeadline}>
            {children}
        </div>
    )
}

export default DocsTitle;