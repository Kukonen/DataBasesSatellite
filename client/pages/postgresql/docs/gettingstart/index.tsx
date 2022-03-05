import styles from '../../../../styles/DocsComponent.module.scss';
import DocsTemplate, {getStyles} from "../../../../components/DocsTemplates/docs.template";
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

const GettingStart = () => {
    const databaseStyle = getStyles("postgresql");

    return (
        <DocsTemplate database={"postgresql"} title={"Getting start"}>
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
                            Install <a className={databaseStyle} href="https://www.postgresql.org/download/">PostgreSQL</a> to your local machine or find virtual server
                        </span>
                    </li>
                </ul>
            </DocsText>
        </DocsTemplate>
    );
}

export default GettingStart;