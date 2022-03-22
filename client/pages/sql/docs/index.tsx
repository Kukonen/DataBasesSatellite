import DocsTemplate from "../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../components/DocsTemplates/docs.title";
import DocsText from "../../../components/DocsTemplates/docs.text";

const Docs = () => {
    return (
        <DocsTemplate database={"sql"} title={"SQL"} >
            <DocsTitle>
                SQL
            </DocsTitle>
            <DocsText>
                SQL is a domain-specific language.
            </DocsText>
        </DocsTemplate>
    )
}

export default Docs;