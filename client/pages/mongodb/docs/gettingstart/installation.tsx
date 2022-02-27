import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import {getStyles} from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";
import DocsCode from "../../../../components/DocsTemplates/docs.code";


const installation = () => {

    const databaseStyle = getStyles("mongodb");

    return (
        <DocsTemplate database={"mongodb"} title={"Installation"}>
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
                Mongoose
            </DocsTitle>
            <DocsText>
                Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks. <br/>
                Install: <br/>
                <DocsCode mode={"npm"} >
                    npm install mongoose
                </DocsCode>
            </DocsText>
            <DocsTitle>
                Mongoose
            </DocsTitle>
            <DocsText>
                Define Mongoose models using TypeScript classes <br/>
                Install: <a className={databaseStyle} href="https://github.com/typegoose/typegoose">Typegoose</a>
            </DocsText>
            <DocsTitle>
                That we will do
            </DocsTitle>
            <DocsText>
                Next, we will use mongoose with typescript
            </DocsText>
        </DocsTemplate>
    );
}

export default installation;