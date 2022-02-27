import DocsTemplate, {getStyles} from "../../../../components/DocsTemplates/docs.template";
import DocsText from "../../../../components/DocsTemplates/docs.text";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";

const Instruments = () => {
    const databaseStyle = getStyles("mongodb");

    return (
        <DocsTemplate database={"mongodb"} title={"Instruments"}>
            <DocsTitle>
                Compass MongoDB
            </DocsTitle>
            <DocsText>
                GUI for Mongo DB for your local <br/>
                Install - <a className={databaseStyle} href="https://www.mongodb.com/try/download/compass">Compass</a>
            </DocsText>
        </DocsTemplate>
    )
}

export default Instruments;