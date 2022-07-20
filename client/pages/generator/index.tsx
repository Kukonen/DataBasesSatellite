import GeneratorHeader from "../../components/Generator/GeneratorHeader";
import store from "../../store/store";
import {useState} from "react";
import {GeneratorContentMode} from "../../generator/generatorContentMode";
import GeneratorContent from "../../components/Generator/GeneratorContent";
import styles from '../../styles/Generator.module.scss';

const Generator = () => {
    const [contentMode, setContentMode] = useState<GeneratorContentMode>(store.getState().generatorContentModeReducer)

    store.subscribe(() => {
        setContentMode(store.getState().generatorContentModeReducer);
    })

    return (
        <>
            <GeneratorHeader />
            <GeneratorContent />
            <div className={styles.GenerateButtonSection}>
                <div className={styles.GenerateButton}>Generate!</div>
            </div>
        </>
    )
}

export default Generator;