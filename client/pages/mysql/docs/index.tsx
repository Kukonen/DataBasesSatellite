import DocsTemplate from "../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../components/DocsTemplates/docs.title";
import DocsText from "../../../components/DocsTemplates/docs.text";

const Docs = () => {
    return (
        <DocsTemplate database={"mysql"} title={"MySQL"} >
            <DocsTitle>
                MySQL with JavaScript
            </DocsTitle>
            <DocsText>
                MySQL is an open-source relational database management system.
            </DocsText>
        </DocsTemplate>
    )
}

export default Docs;