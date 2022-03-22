import DocsTemplate, {getStyles} from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";
import DocsCode from "../../../../components/DocsTemplates/docs.code";

const Tables = () => {
    const databaseStyle = getStyles("sql");

    return (
        <DocsTemplate database={"sql"} title={"Tables"} >
            <DocsTitle>
                Create Table
            </DocsTitle>
            <DocsText>
                To create table use:
                <DocsCode mode={"sql"} >
                    CREATE TABLE tableName
                    (
                        poolName_1: type_1,
                        poolName_2: type_2
                    )
                </DocsCode>
                All types use can find at: <a className={databaseStyle} href="https://dev.mysql.com/doc/refman/8.0/en/data-types.html">Types</a>
            </DocsText>
            <DocsTitle>
                Rename Table
            </DocsTitle>
            <DocsText>
                To rename table use:
                <DocsCode mode={"sql"}>
                    RENAME TABLE oldTableName TO newTableName
                </DocsCode>
            </DocsText>
            <DocsTitle>
                Emptying The Table
            </DocsTitle>
            <DocsText>
                To emptying the table use:
                <DocsCode mode={"sql"} >
                    TRUNCATE TABLE tableName
                </DocsCode>
            </DocsText>
            <DocsTitle>
                Delete Table
            </DocsTitle>
            <DocsText>
                TO delete table use:
                <DocsCode mode={"sql"} >
                    DROP TABLE tableName
                </DocsCode>
            </DocsText>
        </DocsTemplate>
    )
}

export default Tables;