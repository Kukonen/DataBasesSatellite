import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";

const Beginning = () => {
    return (
        <DocsTemplate database={"sql"} title={"Beginning"} >
            <DocsTitle>
                SQL help with
            </DocsTitle>
            <DocsText>
                <ul>
                    <li>access data in RDBMS systems</li>
                    <li>describe data and their structure</li>
                    <li>define and manage the data in the database</li>
                    <li>interact with other languages through SQL modules, libraries, and precompilers</li>
                    <li>create and delete databases and tables</li>
                    <li>creating views, stored procedures, and functions in the database</li>
                    <li>set permissions to access tables, procedures, and views</li>
                </ul>
            </DocsText>
            <DocsTitle>
                Commands
            </DocsTitle>
            <DocsText>
                SQL consists of the various commands described earlier
            </DocsText>
        </DocsTemplate>
    )
}

export default Beginning;