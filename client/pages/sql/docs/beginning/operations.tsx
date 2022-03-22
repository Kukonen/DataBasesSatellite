import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";
import DocsCode from "../../../../components/DocsTemplates/docs.code";

const Operations = () => {

    const filterDeleteCode = "DELETE FROM Person\n" +
        "WHERE name='Alex' AND age < 18";

    return (
        <DocsTemplate database={"sql"} title={"Operations"} >
            <DocsTitle>
                Add New Data
            </DocsTitle>
            <DocsText>
                To add new data use:
                <DocsCode mode={"sql"} >
                    INSERT tableName(column_1, column_2, column_3)
                    VALUES (value_1, value_2, value_3);
                </DocsCode>
            </DocsText>
            <DocsTitle>
                Change Data
            </DocsTitle>
            <DocsText>
                To change data:
                <DocsCode mode={"sql"} >
                    UPDATE tableName
                    SET column_1 = value_1, column_2 = value_2
                </DocsCode>
            </DocsText>
            <DocsTitle>
                Find Data
            </DocsTitle>
            <DocsText>
                To find data:
                <DocsCode mode={"sql"} >
                    SELECT (column_1, column_2) FROM tableName
                </DocsCode>
                To get all data:
                <DocsCode mode={"sql"} >
                    SELECT * FROM tableName
                </DocsCode>
            </DocsText>
            <DocsTitle>
                Delete Data
            </DocsTitle>
            <DocsText>
                To delete data:
                <DocsCode mode={"sql"} >
                    DELETE FROM tableName
                    WHERE condition;
                </DocsCode>
                * that's WHERE see below
                <DocsTitle>
                    Filter
                </DocsTitle>
                <DocsText>
                    <b>WHERE</b> is condition to operations for filtering data <br/>
                    For example, we can find all persons with name equals Alex
                    <DocsCode mode={"sql"} >
                        SELECT * FROM Person WHERE name = 'Alex'
                    </DocsCode>
                    Also, we can use <b>AND</b>, <b>OR</b>, <b>NOT</b> with <b>WHERE</b> , for example with delete operation:
                    <DocsCode mode={"sql"}>
                        {filterDeleteCode}
                    </DocsCode>
                </DocsText>
            </DocsText>
        </DocsTemplate>
    )
}

export default Operations;