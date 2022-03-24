import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";
import Link from 'next/link'

const Commands = () => {
    return (
        <DocsTemplate database={"mysql"} title={"Commands"} >
            <DocsTitle>
                What's Commands MySQL consist?
            </DocsTitle>
            <DocsText>
                MySQL consists SQL commands. <br/>
                These commands you can learn at&nbsp;
                <a>
                    <Link href={"../../../sql/docs"}>
                        SQL section
                    </Link>
                </a>
                &nbsp;on our site;
            </DocsText>
        </DocsTemplate>
    )
}

export default Commands;