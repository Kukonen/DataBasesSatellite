import {commandType} from "./commands/CommandsInterface";
import classNames from "classnames";
import styles from "../styles/Generator.module.scss";

export const getStyleCommandBlock = (style : commandType, type: 'header' | 'content') => {

    switch (style) {
        case "create":
            return classNames(
                styles.GeneratorHeaderCommandBlock,
                styles.createBlock
            )
        case "update":
            return  classNames(
                styles.GeneratorHeaderCommandBlock,
                styles.updateBlock
            )
        case "delete":
            return classNames(
                styles.GeneratorHeaderCommandBlock,
                styles.deleteBock
            )
        case "get":
            return  classNames(
                styles.GeneratorHeaderCommandBlock,
                styles.getBlock
            )
    }
}