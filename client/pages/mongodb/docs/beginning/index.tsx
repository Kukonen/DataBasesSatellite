import styles from '../../../../styles/DocsComponent.module.scss';
import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsCode from "../../../../components/DocsTemplates/docs.code";
import DocsText from "../../../../components/DocsTemplates/docs.text";

const Beginning = () => {

    const code = `mongoose.connect(link, () => {\n` +
        `   console.log(\"mongoose running\")\n` +
        `});`

    return (
        <DocsTemplate database={"mongodb"} title={"Beginning"}>
            <DocsTitle>
                Import library
            </DocsTitle>
            <DocsText>
                <DocsCode mode={"mongodb"} >
                    const mongoose = require("mongoose");
                </DocsCode>
            </DocsText>
            <DocsTitle>
                Connect with database
            </DocsTitle>
            <DocsText>
                To connect to database, we must add this construction in index file: <br/>
                <DocsCode mode={"mongodb"}>
                    {code}
                </DocsCode> <br/>
                Where link is path to database, for example: <b>mongodb://localhost:27017/YourDatabase</b>
            </DocsText>
        </DocsTemplate>
    )
}

export default Beginning;

