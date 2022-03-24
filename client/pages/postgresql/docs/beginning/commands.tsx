import DocsTemplate, {getStyles} from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";
import Link from 'next/link'

const Commands = () => {
    const databaseStyles = getStyles("postgresql");

    return (
        <DocsTemplate database={"postgresql"} title={"Commands"} >
            <DocsTitle>
                What's Commands PostgreSQL consist?
            </DocsTitle>
            <DocsText>
                PostgreSQL consists SQL commands. <br/>
                These commands you can learn at&nbsp;
                <a className={databaseStyles}>
                    <Link href={"../../../sql/docs"}>
                        PostgreSQL section
                    </Link>
                </a>
                &nbsp;on our site;
            </DocsText>
        </DocsTemplate>
    )
}

export default Commands;