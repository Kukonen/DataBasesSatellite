import styles from '../../../../styles/DocsComponent.module.scss';
import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import style from "../../../../styles/DocsComponent.module.scss";
import {getStyles, switchCrossedText} from "../../../../components/DocsTemplates/docs.template";

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
            <div className={style.contentHeadline}>
                What we need?
            </div>
            <div className={style.contentText}>
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
            </div>
        </DocsTemplate>
    );
}

export default index;