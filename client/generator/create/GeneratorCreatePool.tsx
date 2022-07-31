import styles from "../../styles/Generator.module.scss";
import {useState} from "react";
import {PoolTypes} from "./PoolType";

const GeneratorCreatePool = (props: any) => {

    const [text, setText] = useState<string>(props.text ? props.text : "");
    const [types, setTypes] = useState<PoolTypes>(props.types ? props.types : 'number');

    return (
        <div className={styles.GeneratorContentCommandBlockTwoInputSection} key={props.id}>
            <input type="text"
                   className={styles.GeneratorContentCommandBlockTwoInputText}
                   value={text}
                   onChange={event => setText(event.target.value)}
                   placeholder={"Pool Name"}
            />
            <select
                className={styles.GeneratorContentCommandBlockTwoInputSelect}
                value={types}
                onChange={event => setTypes(event.target.value as PoolTypes)}
            >
                <option value="number">number</option>
                <option value="symbol">symbol</option>
                <option value="string">string</option>
            </select>
        </div>
    )
}

export default GeneratorCreatePool;