import {commandType} from "./commands/CommandsInterface";
import classNames from "classnames";
import styles from "../styles/Generator.module.scss";

export const getStyleCommandBlock = (style : commandType, type: 'header' | 'content') => {
    if (type === 'header') {
        switch (style) {
            case "add":
                return  classNames(
                    styles.GeneratorHeaderCommandBlock,
                    styles.addBlock
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
            case "create":
                return classNames(
                    styles.GeneratorHeaderCommandBlock,
                    styles.createBlock
                )
            case "drop":
                return classNames(
                    styles.GeneratorHeaderCommandBlock,
                    styles.dropBlock
                )
        }
    }

    if (type === 'content') {
        switch (style) {
            case "add":
                return classNames(
                    styles.GeneratorContentCommandBlock,
                    styles.addBlock
                )
            case "update":
                return  classNames(
                    styles.GeneratorContentCommandBlock,
                    styles.updateBlock
                )
            case "delete":
                return classNames(
                    styles.GeneratorContentCommandBlock,
                    styles.deleteBock
                )
            case "get":
                return  classNames(
                    styles.GeneratorContentCommandBlock,
                    styles.getBlock
                )
            case "create":
                return classNames(
                    styles.GeneratorContentCommandBlock,
                    styles.createBlock
                )
            case "drop":
                return classNames(
                    styles.GeneratorContentCommandBlock,
                    styles.dropBlock
                )
        }
    }
}