import styles from '../../../../styles/DocsComponent.module.scss';
import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import style from "../../../../styles/DocsComponent.module.scss";
import Highlighter from "../../../../highligher/highlighter";
import {getStyles} from "../../../../components/DocsTemplates/docs.template";


const installation = () => {

    const codeTypescript = "npm install typescript";
    const codeMongoose = "npm install mongoose";

    const databaseStyle = getStyles("mongodb");

    return (
        <DocsTemplate database={"mongodb"} title={"Installation"}>
            <div className={style.contentHeadline}>
                Typescript
            </div>
            <div className={style.contentText}>
                TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. <br/>
                Install: <br/>
                {
                    Highlighter.npm(codeTypescript)
                }
            </div>
            <div className={style.contentHeadline}>
                Mongoose
            </div>
            <div className={style.contentText}>
                Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks. <br/>
                Install: <br/>
                {
                    Highlighter.npm(codeMongoose)
                }
            </div>
            <div className={style.contentHeadline}>
                Mongoose
            </div>
            <div className={style.contentText}>
                Define Mongoose models using TypeScript classes <br/>
                Install: <a className={databaseStyle} href="https://github.com/typegoose/typegoose">Typegoose</a>
            </div>
            <div className={style.contentHeadline}>
                That we will do
            </div>
            <div className={style.contentText}>
                Next, we will use mongoose with typescript
            </div>
        </DocsTemplate>
    );
}

export default installation;