import DocsTemplate, {getStyles} from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";

const Instruments = () => {
    const databaseStyle = getStyles("mysql");

    return (
        <DocsTemplate database={"mysql"} title={"Instruments"}>
            <DocsTitle>
                MySQL Workbench
            </DocsTitle>
            <DocsText>
                GUI for MySQL for your local <br/>
                Install - <a className={databaseStyle} href="https://dev.mysql.com/downloads/workbench/">Compass</a>
            </DocsText>
        </DocsTemplate>
    )
}

export default Instruments;