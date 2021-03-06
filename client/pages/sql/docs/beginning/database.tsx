import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";
import DocsCode from "../../../../components/DocsTemplates/docs.code";

const DataBase = () => {
    return (
        <DocsTemplate database={"sql"} title={"DataBase"} >
            <DocsTitle>
                Create Database
            </DocsTitle>
            <DocsText>
                To create database use:
                <DocsCode mode={"sql"} >
                    CREATE DATABASE databaseName;
                </DocsCode>
                If we want to check database availability
                <DocsCode mode={"sql"} >
                    CREATE DATABASE [IF NOT EXISTS] databaseName;
                </DocsCode>
            </DocsText>
            <DocsTitle>
                Delete Database
            </DocsTitle>
            <DocsText>
                If you want to delete database:
                <DocsCode mode={"sql"} >
                    DROP DATABASE databaseName
                </DocsCode>
                Same, if we want to check database availability, use:
                <DocsCode mode={"sql"} >
                    DROP DATABASE [IF EXISTS] databaseName
                </DocsCode>
            </DocsText>
        </DocsTemplate>
    )
}

export default DataBase;