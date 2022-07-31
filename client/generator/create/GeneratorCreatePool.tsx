import styles from "../../styles/Generator.module.scss";
import {useState} from "react";
import {PoolTypes} from "./PoolType";
import Image from "next/image";
import TrashImg from "../../public/trash.svg";

const GeneratorCreatePool = (props: any) => {

    const [text, setText] = useState<string>(props.text ? props.text : "");
    const [types, setTypes] = useState<PoolTypes>(props.types ? props.types : 'number');

    return (
        <div className={styles.GeneratorContentCommandBlockThreeInputSection} key={props.id}>
            <input type="text"
                   className={styles.GeneratorContentCommandBlockThreeInputText}
                   value={text}
                   onChange={event => setText(event.target.value)}
                   placeholder={"Pool Name"}
            />
            <select
                className={styles.GeneratorContentCommandBlockThreeInputSelect}
                value={types}
                onChange={event => setTypes(event.target.value as PoolTypes)}
            >
                <option value="number">number</option>
                <option value="symbol">symbol</option>
                <option value="string">string</option>
            </select>
            <div
                className={styles.GeneratorContentCommandThreeButton}
                onClick={() => props.deletePool()}
            >
                <Image
                    src={TrashImg}
                />
            </div>
        </div>
    )
}

export default GeneratorCreatePool;