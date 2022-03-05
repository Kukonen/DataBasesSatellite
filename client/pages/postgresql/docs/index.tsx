import DocsTemplate from "../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../components/DocsTemplates/docs.title";
import DocsText from "../../../components/DocsTemplates/docs.text";

const Docs = () => {
    return (
        <DocsTemplate database={"postgresql"} title={"PostgreSQL"} >
            <DocsTitle>
                PostgreSQL with JavaScript
            </DocsTitle>
            <DocsText>
                PostgreSQL is an open-source relational database management system.
            </DocsText>
        </DocsTemplate>
    )
}

export default Docs;