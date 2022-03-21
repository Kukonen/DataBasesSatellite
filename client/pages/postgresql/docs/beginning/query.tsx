import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";
import DocsCode from "../../../../components/DocsTemplates/docs.code";

const Query = () => {
    return (
        <DocsTemplate database={"postgresql"} title={"Query"}>
            <DocsTitle>Query</DocsTitle>
            <DocsText>
                MySQL consists of a set of commands, so in order to run these commands through javascript we need to use the query() method
                <DocsCode mode={"postgresql"} >
                    connection.query(queryCommand, callbackFunction);
                </DocsCode>
                Where:
                <ul>
                    <li><b>queryCommand</b> - string, includes MySQl command</li>
                    <li>
                        <b>callbackFunction</b> - callback function, that's can include attributes:
                        <ul>
                            <li><b>error</b> - error if one occurred during the query</li>
                            <li><b>results</b> - contain the results of the query</li>
                        </ul>
                    </li>
                </ul>
            </DocsText>
        </DocsTemplate>
    )
}

export default Query;