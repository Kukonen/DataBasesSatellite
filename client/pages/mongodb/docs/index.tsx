import DocsTemplate from "../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../components/DocsTemplates/docs.title";
import DocsText from "../../../components/DocsTemplates/docs.text";

const Docs = () => {

    return (
        <DocsTemplate database={"mongodb"} title={"Mongo DataBase"}>
            <DocsTitle>
                Mongo Database with JavaScript
            </DocsTitle>
            <DocsText>
                MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program.
            </DocsText>
        </DocsTemplate>
    )
}

export default Docs;