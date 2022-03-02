import DocsTemplate from "../../../../components/DocsTemplates/docs.template";
import DocsTitle from "../../../../components/DocsTemplates/docs.title";
import DocsText from "../../../../components/DocsTemplates/docs.text";
import DocsCode from "../../../../components/DocsTemplates/docs.code";


const SchemasAndTypes = () => {

    const schemaJsCode = "const mongoose = require('mongoose');\n" +
        "const Schema = mongoose.Schema;\n" +
        "\n" +
        "const personSchema = new Schema({\n" +
        "    name: {\n" +
        "        type: String,\n" +
        "        required: true\n" +
        "    },\n" +
        "    age: {\n" +
        "        type: Number,\n" +
        "        required: false\n" +
        "    }\n" +
        "});\n" +
        "\n" +
        "module.exports = mongoose.model('person', personSchema);"

    return (
        <DocsTemplate database={"mongodb"} title={"Schemas And Types"}>
            <DocsTitle>
                Mongoose Schema
            </DocsTitle>
            <DocsText>
                Mongoose Schema is MongoDB collection <br/>
                <DocsCode mode={"mongodb"}>
                    {schemaJsCode}
                </DocsCode>
                There we crating scheme for person, describe name as string, this pool must be writing, and age as number, and this pool can be don't writing <br/>
                After creating scheme we export schema as model named person
            </DocsText>
            <DocsTitle>
                Types
            </DocsTitle>
            <DocsText>
                <ul>
                    <li><b>String</b> - text <br/> Can have attributes:
                        <ul>
                            <li><b>Max/min</b> - text length</li>
                            <li><b>match</b> - regular regular expression</li>
                            <li><b>enum</b> - selectable values</li>
                        </ul>
                    </li>
                    <li><b>Number</b> - integer or real number (can't be null and undefined)</li>
                    <li><b>Date</b> - javascript date</li>
                    <li><b>Buffer</b> - binary data</li>
                    <li><b>Boolean</b> - true or false</li>
                    <li><b>Mixed</b> - can be any type</li>
                    <li><b>ObjectId</b> - Schema.Types.ObjectId is path to other linked model</li>
                    <li><b>Array</b> array (can be typed, for example, array of string is [String])</li>
                    <li><b>Decimal128</b> - for 128-bit decimal floating points</li>
                    <li><b>Map</b> - javascript map class</li>
                    <li><b>Schema</b> - sub schema (mongoose schema)</li>
                </ul>
            </DocsText>
        </DocsTemplate>
    )
}

export default SchemasAndTypes;