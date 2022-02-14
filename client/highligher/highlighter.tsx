import styles from "../styles/DocsComponent.module.scss";

class Highlighter {
    // separating keywords for different colors highlighting them

    // keyword groups matched with style's array

    // keyword groups length must be same with style's array

    public static mongodb(code: string) {

        const keywordsGroups = [
            ["mongoose"],
            ["findOne", "findMany", "let", "var"]
        ]

        const stylesArray = [
            styles.codeFirstStyle,
            styles.codeSecondStyle
        ]

        const {words, symbols} = this.getWordsInCode(code);

        const text = words.map((word, index) => {
            const styleNumber = this.getKeyWordsGroupNumber(keywordsGroups, word);
            console.log(word, styleNumber)
            if (styleNumber >= 0) {
                return <span>
                    <span className={stylesArray[styleNumber]}>{word}</span>
                    {symbols[index + 1]}
                </span>
            } else {
                return <span>{word}{symbols[index + 1]}</span>
            }
        })

        return (
            <div className={styles.contentCode}>
                {text}
            </div>
        )
    }

    public static mysql(code: string) {

    }

    public static postgresql(code: string) {

    }

    public static getWordsInCode(code: string) {
        const splitSymbolsWords = new RegExp("[\'\" .()]+");
        const splitSymbols = new RegExp("[^\'\" .()]+")

        const words = code.split(splitSymbolsWords);
        const symbols = code.split(splitSymbols);

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