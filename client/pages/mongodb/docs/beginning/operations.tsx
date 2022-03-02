import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";
import DocsCode from "../../../../components/DocsTemplates/docs.code";

const Operations = () => {

    const changeCode = "const Person = required(path);\n" +
        "\n" +
        "await Person.update({name: \"Alex\"}, {name: \"Fred\"});\n" +
        "\n" +
        "const allUpdatedPerson = await Person.updateMany({name: \"Alex\"}, {name: \"Fred\"});\n" +
        "\n" +
        "const updatedPerson = await Person.updateOne({name: \"Alex\"}, {name: \"Fred\"});";

    const findCode = "const Person = required(path);\n" +
        "\n" +
        "const findPersonByName = await Person.findOne({name: \"Alex\"});\n" +
        "\n" +
        "const findFirstPersonByAge = await Person.findOne({age: 18});";

    const deleteCode = "const Person = required(path);\n" +
        "\n" +
        "await Person.remove({name: \"Alex\"});\n" +
        "\n" +
        "await Person.deleteOne({name: \"Alex\"});\n" +
        "\n" +
        "await Perosn.deleteMany({name: \"Alex\"});\n" +
        "\n" +
        "const deletedPerosn = await Person.findOneAndDelete({name: \"Alex\"});";


    return (
        <DocsTemplate database={"mongodb"} title={"Operations"}>
            <DocsTitle>
                Import MongoDB model
            </DocsTitle>
            <DocsText>
                After use operation with collection we must import this model
                <DocsCode mode={"mongodb"} >
                    const ModelName = require('path to model')
                </DocsCode>
                *Named with capital letter
            </DocsText>
            <DocsTitle>
                Change new data
            </DocsTitle>
            <DocsText>
                To change data, we can use method <b>update()</b> <br/>
                So you can use methods <b>updateMany()</b> to return updated components <br/>
                If you want update only 1 element use <b>updateOne()</b>
                Attributes:
                <ul>
                    <li>filter</li>
                    <li>updating</li>
                    <li>options</li>
                    <li>callback</li>
                </ul>
                *All of this function is async functions
                <DocsCode mode={"mongodb"} >
                    {changeCode}
                </DocsCode>
            </DocsText>
            <DocsTitle>
                Find Data
            </DocsTitle>
            To find data, we can use method <b>find()</b> <br/>
            If you need only one, first result you can use <b>findOne()</b> <br/>
            Attributes:
            <ul>
                <li>filter</li>
                <li>options</li>
                <li>callback</li>
            </ul>
            *All of this function is async functions
            <DocsText>
                <DocsCode mode={"mongodb"} >
                    {findCode}
                </DocsCode>
            </DocsText>
            <DocsTitle>
                Delete Data
            </DocsTitle>
            <DocsText>
                To delete data, we can use method <b>remove()</b>, if we want to delete only 1 element, then add option single: true <br/>
                Same methods for delete many <b>deleteMany()</b> and for single <b>deleteOne()</b>, this methods don't watch on option single
                If you want get deleted element use <b>findOneAndDelete()</b>
                Attributes:
                <ul>
                    <li>filter</li>
                    <li>options</li>
                    <li>callback</li>
                </ul>
                *All of this function is async functions
                <DocsCode mode={"mongodb"} >
                    {deleteCode}
                </DocsCode>
                *All of this function is async functions
            </DocsText>
            <DocsTitle>
                Filter
            </DocsTitle>
            <DocsText>
                Filter can be:
                <ul>
                    <li>Object</li>
                    <li>Regular expression</li>
                </ul>
            </DocsText>
        </DocsTemplate>
    )
}

export default Operations;