import DocsTemplate, {getStyles} from "../../../../components/DocsTemplates/docs.template";
import style from "../../../../styles/DocsComponent.module.scss";

const Instruments = () => {
    const databaseStyle = getStyles("mongodb");

    return (
        <DocsTemplate database={"mongodb"} title={"Instruments"}>
            <div className={style.contentHeadline}>
                Compass MongoDB
            </div>
            <div className={style.contentText}>
                GUI for Mongo DB for your local <br/>
                Install - <a className={databaseStyle} href="https://www.mongodb.com/try/download/compass">Compass</a>
            </div>
        </DocsTemplate>
    )
}

export default Instruments;