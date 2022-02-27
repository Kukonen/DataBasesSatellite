import styles from "../styles/DocsComponent.module.scss";
import {ReactElement} from "react";

class Highlighter {
    // separating keywords for different colors highlighting them

    // keyword groups matched with style's array

    // keyword groups length must be same with style's array

    public static npm(code: string) : ReactElement {
        const keywordsGroups = [
            ["npm"],
            ["install"]
        ]

        const stylesArray = [
            styles.codeFirstStyle,
            styles.codeSecondStyle
        ]

        const {words, symbols} = this.getWordsInCode(code);

        let quotationMarksStatus:boolean = false;

        const text = words.map((word, index) => {
            const styleNumber = this.getKeyWordsGroupNumber(keywordsGroups, word);

            const quotationMarksCondition = symbols[index] === "\"";

            let wordElement;
            let symbolElement;

            // console.log(styleNumber, word, symbols[index + 1], quotationMarksStatus)
            if (quotationMarksStatus) {
                wordElement = <span className={styles.codeQuotationMarksStyle}>{word}</span>
            } else if (styleNumber >= 0) {
                wordElement = <span className={stylesArray[styleNumber]}>{word}</span>
            } else {
                wordElement = <span>{word}</span>
            }

            if (styleNumber >= 0 && quotationMarksStatus || quotationMarksCondition) {
                symbolElement = <span className={styles.codeQuotationMarksStyle}>{symbols[index]}</span>;
            } else if (styleNumber >= 0) {
                symbolElement = <span>{symbols[index]}</span>;
            } else {
                symbolElement = <span>{symbols[index]}</span>;
            }

            if (quotationMarksCondition) {
                quotationMarksStatus = !quotationMarksStatus;
            }

            return <span>
                {wordElement}
                {symbolElement}
            </span>
        })

        return (
            <div className={styles.contentCode}>
                {text}
            </div>
        )
    }

    public static mongodb(code: string) : ReactElement {

        const keywordsGroups = [
            ["mongoose"],
            ["findOne", "findMany", "let", "var"]
        ]

        const stylesArray = [
            styles.codeFirstStyle,
            styles.codeSecondStyle
        ]

        const {words, symbols} = this.getWordsInCode(code);

        let quotationMarksStatus:boolean = false;

        const text = words.map((word, index) => {
            const styleNumber = this.getKeyWordsGroupNumber(keywordsGroups, word);

            const quotationMarksCondition = symbols[index] === "\"";

            let wordElement;
            let symbolElement;

            // console.log(styleNumber, word, symbols[index + 1], quotationMarksStatus)
            if (quotationMarksStatus) {
                wordElement = <span className={styles.codeQuotationMarksStyle}>{word}</span>
            } else if (styleNumber >= 0) {
                wordElement = <span className={stylesArray[styleNumber]}>{word}</span>
            } else {
                wordElement = <span>{word}</span>
            }

            if (styleNumber >= 0 && quotationMarksStatus || quotationMarksCondition) {
                symbolElement = <span className={styles.codeQuotationMarksStyle}>{symbols[index]}</span>;
            } else if (styleNumber >= 0) {
                symbolElement = <span>{symbols[index]}</span>;
            } else {
                symbolElement = <span>{symbols[index]}</span>;
            }

            if (quotationMarksCondition) {
                quotationMarksStatus = !quotationMarksStatus;
            }

            return <span>
                {wordElement}
                {symbolElement}
            </span>
        })

        return (
            <div className={styles.contentCode}>
                {text}
            </div>
        )
    }

    public static mysql(code: string) : ReactElement {
        return <div></div>
    }

    public static postgresql(code: string) : ReactElement {
        return <div></div>
    }

    public static getWordsInCode(code: string) {
        const splitSymbolsWords = new RegExp("[\'\" .()]");

        const words = code.split(splitSymbolsWords);
        let symbols:string[] = [];

        // find symbols and push they in array
        for (let index = 0; index < code.length; ++index) {
            if (
                code[index] === " " ||
                code[index] === "."  ||
                code[index] === "\"" ||
                code[index] === "\'" ||
                code[index] === "(" ||
                code[index] === ")"
            ) {
                symbols.push(code[index]);
            }
        }

        return {
            words,
            symbols
        }
    }

    // we get number of group by giving word
    public static getKeyWordsGroupNumber (keywordGroups: any, word: string) {
        for (let keywordGroup = 0; keywordGroup < keywordGroups.length; ++keywordGroup) {
            for (let keyword = 0; keyword < keywordGroups[keywordGroup].length; ++keyword) {
                if (keywordGroups[keywordGroup][keyword] === word) {
                    return keywordGroup;
                }
            }
        }
        return -1;
    }
}

export default Highlighter;