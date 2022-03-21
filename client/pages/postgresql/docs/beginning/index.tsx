import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";
import DocsCode from "../../../../components/DocsTemplates/docs.code";

const Beginning = () => {

    const importCode = "const { Client } = require('pg')";

    const code = "const client = new Client({\n" +
        "   user,\n" +
        "   host,\n" +
        "   database,\n" +
        "   password,\n" +
        "   port\n" +
    "}\n" +
    "\nclient.connect()";

    return (
        <DocsTemplate database={"postgresql"} title={"Beginning"} >
            <DocsTitle>
                Import library
            </DocsTitle>
            <DocsText>
                <DocsCode mode={"postgresql"} >
                    {importCode}
                </DocsCode>
            </DocsText>
            <DocsTitle>
                Connect with database
            </DocsTitle>
            <DocsText>
                To connect to database, we must add this construction in index file: <br/>
                <DocsCode mode={"postgresql"}>
                    {code}
                </DocsCode> <br/>
                Where:
                <ul>
                    <li><b>host</b> - path to hosting (can be local hosting)</li>
                    <li><b>user</b> - mysql user</li>
                    <li><b>password</b> - user password</li>
                    <li><b>database</b> - database, where you will be connect</li>
                    <li><b>port</b> - port to connect to database</li>
                </ul>
            </DocsText>
        </DocsTemplate>
    )
}

export default Beginning;