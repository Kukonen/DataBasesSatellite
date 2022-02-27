import styles from '../../../../styles/DocsComponent.module.scss';
import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import {getStyles, switchCrossedText} from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";

// crosses out the text and vice versa
const switchCrossedText = (event: any) => {
    if (event.target.className === styles.textCrossed) {
        event.target.className = undefined;
    } else {
        event.target.className = styles.textCrossed;
    }
}

const index = () => {
    const databaseStyle = getStyles("mongodb");

    return (
        <DocsTemplate database={"mongodb"} title={"Getting start"}>
            <DocsTitle>
                What we need?
            </DocsTitle>
            <DocsText>
                At first you must follow at this sentences:
                <ul>
                    <li>
                        <span onClick={event => switchCrossedText(event)}>
                            Install <a className={databaseStyle} href="https://nodejs.org/en/download/">Node js</a>
                        </span>
                    </li>
                    <li>
                        <span onClick={event => switchCrossedText(event)}>
                            Install <a className={databaseStyle} href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm</a>
                        </span>
                    </li>
                    <li>
                        <span onClick={event => switchCrossedText(event)}>
                            Install <a className={databaseStyle} href="https://docs.mongodb.com/guides/server/install/">MongoDB local</a> or find virtual server
                        </span>
                    </li>
                </ul>
            </DocsText>
        </DocsTemplate>
    );
}

export default index;