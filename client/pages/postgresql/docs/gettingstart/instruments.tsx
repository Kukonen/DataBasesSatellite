import DocsTemplate, {getStyles} from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";

const Instruments = () => {
    const databaseStyle = getStyles("postgresql");

    return (
        <DocsTemplate database={"postgresql"} title={"Instruments"}>
            <DocsTitle>
                pgAdmin
            </DocsTitle>
            <DocsText>
                GUI for PostgreSQL for your local <br/>
                Install - <a className={databaseStyle} href="https://www.pgadmin.org/download/">pgAdmin</a>
            </DocsText>
        </DocsTemplate>
    )
}

export default Instruments;