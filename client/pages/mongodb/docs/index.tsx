import DocsTemplate from "../../../components/DocsTemplates/docs.template";
import style from "../../../styles/DocsComponent.module.scss";
import Highlighter from "../../../highligher/highlighter";

const Docs = () => {

    return (
        <DocsTemplate database={"mongodb"} title={"Mongo DataBase"}>
            <div className={style.contentHeadline}>
                Mongo Database with JavaScript
            </div>
            <div className={style.contentText}>
                MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program.
            </div>
        </DocsTemplate>
    )
}

export default Docs;