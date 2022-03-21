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

        const text = this.createHighlightElement(words, symbols, keywordsGroups, stylesArray)

        return (
            <div className={styles.contentCode}>
                {text}
            </div>
        )
    }

    public static mongodb(code: string) : ReactElement {

        const keywordsGroups = [
            ["mongoose", "module", "required", "type"],
            ["findOne", "findMany", "let", "var", "const", "model", "new", "exports", "true", "false", "require"],
            ["Schema", "Number", "Array", "String"]
        ]

        const stylesArray = [
            styles.codeFirstStyle,
            styles.codeSecondStyle,
            styles.codeThirdStyle
        ]

        const element = this.getElement(code, keywordsGroups, stylesArray);

        return (
            <div className={styles.contentCode}>
                {element}
            </div>
        )
    }

    public static mysql(code: string) : ReactElement {

        const keywordsGroups = [
            ["mysql", "module", "required", "type", "CREATE", "DROP", "RENAME", "TRUNCATE", "INSERT", "UPDATE", "DELETE", "WHERE", "SELECT"],
            ["let", "var", "const", "model", "new", "exports", "true", "false", "require", "DATABASE", "EXISTS", "TABLE", "VALUES", "SET", "FROM"],
            ["connect", "createConnection", "query", "IF", "NOT", "TO", "AND", "OR"]
        ]

        const stylesArray = [
            styles.codeFirstStyle,
            styles.codeSecondStyle,
            styles.codeThirdStyle
        ]

        const element = this.getElement(code, keywordsGroups, stylesArray);

        return (
            <div className={styles.contentCode}>
                {element}
            </div>
        )
    }

    public static postgresql(code: string) : ReactElement {
        const keywordsGroups = [
            ["pg", "module", "required", "type", "CREATE", "DROP", "RENAME", "TRUNCATE", "INSERT", "UPDATE", "DELETE", "WHERE", "SELECT"],
            ["let", "var", "const", "model", "new", "exports", "true", "false", "require", "DATABASE", "EXISTS", "TABLE", "VALUES", "SET", "FROM"],
            ["connect", "createConnection", "query", "IF", "NOT", "TO", "AND", "OR", "Pool", "Client"]
        ]

        const stylesArray = [
            styles.codeFirstStyle,
            styles.codeSecondStyle,
            styles.codeThirdStyle
        ]

        const element = this.getElement(code, keywordsGroups, stylesArray);

        return (
            <div className={styles.contentCode}>
                {element}
            </div>
        )
    }

    public static getWordsInCode(code: string) {
        const splitSymbolsWords = new RegExp("[\'\" .(),;:]");

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
                code[index] === ")" ||
                code[index] === "," ||
                code[index] === ";" ||
                code[index] === ":"
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

    public static createHighlightElement(words: string[], symbols: string[], keywordsGroups: string[][], stylesArray: string[]) : ReactElement | ReactElement[] {

        let quotationMarksStatus:boolean = false;

        const text = words.map((word, index) => {
            const styleNumber = this.getKeyWordsGroupNumber(keywordsGroups, word);

            const quotationMarksCondition = symbols[index] === "\"" || symbols[index] === "\'";

            let wordElement;
            let symbolElement;

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

            if (symbols[index] === " ") {
                return <span>
                    {wordElement}
                    &nbsp;
                </span>
            }
            return <span>
                {wordElement}
                {symbolElement}
            </span>
        })

        return text;
    }

    public static createHighlightElementIncludesAllLines(code: string, keywordsGroups: string[][], stylesArray: string[]) {
        const codeForLines = code.split("\n");

        let codeLines:ReactElement[] | undefined = [];

        for (let codeLineIndex = 0; codeLineIndex < codeForLines.length; ++codeLineIndex) {

            const {words, symbols} = this.getWordsInCode(codeForLines[codeLineIndex]);

            const highlightingCode = this.createHighlightElement(words, symbols, keywordsGroups, stylesArray) as ReactElement;

            if (highlightingCode !== undefined) {
                const element =
                    <div className={styles.codeLine}>
                        <div className={styles.codeLineNumber}>{codeLineIndex + 1}</div>
                        {highlightingCode}
                    </div>
                codeLines.push(element)
            }
        }

        return codeLines;
    }

    public static getElement(code: string, keywordsGroups: string[][], stylesArray: string[]) {
        const codeLines = this.createHighlightElementIncludesAllLines(code, keywordsGroups, stylesArray)

        // return element with copy button
        return (
            <div>
                <div>
                    {codeLines}
                </div>
                <div className={styles.codeCopySection}>
                    <div className={styles.codeCopyButton} onClick={() => {
                        navigator.clipboard.writeText(code).then();
                    }}>
                        Copy code
                    </div>
                </div>
            </div>
        )
    }
}

export default Highlighter;