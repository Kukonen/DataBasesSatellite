import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";
import DocsCode from "../../../../components/DocsTemplates/docs.code";

const Beginning = () => {

    const code = "const mysql = require('mysql');\n" +
        "\n" +
        "const connection = mysql.createConnection({\n" +
        "   host,\n" +
        "   user,\n" +
        "   password,\n" +
        "   database\n" +
        "});\n" +
        "\n" +
        "connection.connect(callbackFunction);\n";

    return (
        <DocsTemplate database={"mysql"} title={"Beginning"} >
            <DocsTitle>
                Import library
            </DocsTitle>
            <DocsText>
                <DocsCode mode={"mysql"} >
                    const mysql = require('mysql');
                </DocsCode>
            </DocsText>
            <DocsTitle>
                Connect with database
            </DocsTitle>
            <DocsText>
                To connect to database, we must add this construction in index file: <br/>
                <DocsCode mode={"mysql"}>
                    {code}
                </DocsCode> <br/>
                Where:
                <ul>
                    <li><b>host</b> - path to hosting (can be local hosting)</li>
                    <li><b>user</b> - mysql user</li>
                    <li><b>password</b> - user password</li>
                    <li><b>database</b> - database, where you will be connect</li>
                </ul>
            </DocsText>
            <DocsTitle>
                Connect method
            </DocsTitle>
            <DocsText>
                Connect with your personal data, can have callback function
            </DocsText>
        </DocsTemplate>
    )
}

export default Beginning;