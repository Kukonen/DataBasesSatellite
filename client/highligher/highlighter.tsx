import styles from "../styles/DocsComponent.module.scss";

class Highlighter {
    // separating keywords for different colors highlighting them

    // keyword groups matched with style's array

    // keyword groups length must be same with style's array

    public static mongodb(code: string) {

        const keywordsGroups = [
            ["mongoose"],
            ["findOne", "findMany"]
        ]

        const stylesArray = [
            styles.codeFirstStyle,
            styles.codeSecondStyle
        ]

        const words = code.split(" ");

        const text = words.map(word => {
            const styleNumber = this.getKeyWordsGroupNumber(keywordsGroups, word);

            if (styleNumber >= 0) {
                return <span className={stylesArray[styleNumber]}>{word}&nbsp;</span>
            } else {
                return <span>{word}&nbsp;</span>
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