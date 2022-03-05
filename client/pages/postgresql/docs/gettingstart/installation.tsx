import DocsTemplate, {getStyles} from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";
import DocsCode from "../../../../components/DocsTemplates/docs.code";

const Installation = () => {

    const databaseStyle = getStyles("postgresql");

    return (
        <DocsTemplate database={"postgresql"} title={"Installation"} >
            <DocsTitle>
                Typescript
            </DocsTitle>
            <DocsText>
                TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. <br/>
                Install: <br/>
                <DocsCode mode={"npm"} >
                    npm install typescript
                </DocsCode>
            </DocsText>
            <DocsTitle>
                PostgreSQL
            </DocsTitle>
            <DocsText>
                Npm module to work with PostgreSQL <br/>
                Install: <br/>
                <DocsCode mode={"npm"} >
                    npm install pg
                </DocsCode>
            </DocsText>
        </DocsTemplate>
    )
}

export default Installation;