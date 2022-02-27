import {ReactElement, ReactNode} from "react";
import highlighter from "../../highligher/highlighter";


interface DocsCodeProps {
    children: ReactNode;
    mode: "mongodb" | "mysql" | "postgresql" | "npm";
}

const DocsCode = ({children, mode}: DocsCodeProps) : ReactElement => {
    switch (mode) {
        case "mongodb":
            return highlighter.mongodb(children as string);
        case "mysql":
            return highlighter.mysql(children as string);
        case "postgresql":
            return highlighter.postgresql(children as string);
        case "npm":
            return highlighter.npm(children as string);
        default:
            return <span></span>;
    }
}

export default DocsCode;