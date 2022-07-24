import store from "../../store/store";
import {useState} from "react";
import {GeneratorContentMode} from "../../generator/generatorContentMode";
import GeneratorHeader from "../../components/Generator/GeneratorHeader";
import GeneratorContent from "../../components/Generator/GeneratorContent";
import GeneratorFooter from "../../components/Generator/GeneratorFooter";

const Generator = () => {
    const [contentMode, setContentMode] = useState<GeneratorContentMode>(store.getState().generatorContentModeReducer)

    // const mainElement = document.getElementById("main");
    // const headerElement = document.getElementById("GeneratorHeaderElement");
    // const contentElement = document.getElementById("GeneratorContentElement");
    // const footerElement = document.getElementById("GeneratorFooterElement");

    // headerElement.style.display = "none";

    // us

    store.subscribe(() => {
        setContentMode(store.getState().generatorContentModeReducer);
    })

    return (
        <>
            <GeneratorHeader />
            <GeneratorContent />
            <GeneratorFooter />
        </>
    )
}

export default Generator;