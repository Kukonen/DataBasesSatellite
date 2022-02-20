import Link from "next/link";
import {DataBasesTypes} from './docs.template';
import styles from '../../styles/DocsTemplate.module.scss'
import {ReactElement} from "react";
import {getSection, getStyles, getPathPrefix} from "./docs.template";
import {useRouter} from "next/router";
import {section} from "../NavBarSections/sectionsInterface";

interface SwitchPageProps {
    database: DataBasesTypes
}

interface sectionListItem {
    title: string;
    link: string;
}

const sectionsToSectionsList = (sections: section[], database: DataBasesTypes) => {
    let sectionList = sections.map((section:section) => {

        let sectionArray:sectionListItem[] = section.names.map(sectionName => {
            return {
                title: sectionName.text,
                link: section.link + sectionName.link
            }
        })

        sectionArray.unshift({
            title: section.title,
            link: section.link
        })

        return sectionArray;
    })

    // array combining
    // @ts-ignore
    sectionList = [].concat.apply([], sectionList);

    let sectionListArray: sectionListItem[] = [];

    // rebuild array from [][] to []
    for (let i = 0; i < sectionList.length; ++i) {
        // @ts-ignore
        sectionListArray.push(sectionList[i]);
    }

    sectionListArray.unshift({
        title: database,
        link: ""
    })

    return sectionListArray;
}

const SwitchPage = ({ database }: SwitchPageProps):ReactElement => {

    const sections = getSection(database);
    const linkStyle = getStyles(database);

    const sectionList = sectionsToSectionsList(sections, database)

    const prefix = getPathPrefix(database);

    const { asPath } = useRouter();

    const currentLocation = asPath.split("/docs/")[1] || "";

    let lastPath: string = "", nextPath: string = "";
    let lastName: string = "", nextName: string = "";

    let currentSectionPosition: number = -1;

    console.log(sectionList)
        // find index current section
    sectionList.find((sectionListItem, index) => {
        if (sectionListItem.link === currentLocation) {
            currentSectionPosition = index;
        }
        return sectionListItem.link === currentLocation
    })

    console.log(currentSectionPosition )

    if (currentSectionPosition === 0) {
        nextName = sectionList[currentSectionPosition + 1].title;
        nextPath = sectionList[currentSectionPosition + 1].link;
    }
    else if (currentSectionPosition === sectionList.length - 1) {
        lastName = sectionList[currentSectionPosition - 1].title;
        lastPath = sectionList[currentSectionPosition - 1].link;
    }
    else {
        nextName = sectionList[currentSectionPosition + 1].title;
        nextPath = sectionList[currentSectionPosition + 1].link;
        lastName = sectionList[currentSectionPosition - 1].title;
        lastPath = sectionList[currentSectionPosition - 1].link;
    }

    if (currentSectionPosition === 0) {
        return (
            <div className={styles.switchPage}>
                <Link href={prefix + nextPath}>
                    <a className={linkStyle}>
                        <div className={styles.switchPageLinkBlock}>
                            {nextName}
                        </div>
                    </a>
                </Link>
            </div>
        )
    }

    if (currentSectionPosition === sectionList.length - 1) {
        return (
            <div className={styles.switchPage}>
                <Link href={prefix + lastPath}>
                    <a className={linkStyle}>
                        <div className={styles.switchPageLinkBlock}>
                            {lastName}
                        </div>
                    </a>
                </Link>
            </div>
        )
    }

    return (
        <div className={styles.switchPage}>
            <Link href={prefix + lastPath}>
                <a className={linkStyle}>
                    <div className={styles.switchPageLinkBlock}>
                        {lastName}
                    </div>
                </a>
            </Link>
            <Link href={prefix + nextPath}>
                <a className={linkStyle}>
                    <div className={styles.switchPageLinkBlock}>
                        {nextName}
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default SwitchPage;