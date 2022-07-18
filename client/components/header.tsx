import Link from 'next/link'
import {useEffect, useState} from "react";


type Themes = 'light' | 'dark';

const Header = () => {
    const [theme, setTheme] = useState<Themes>('light');

    useEffect(() => {
        const localStorageTheme = localStorage.getItem('theme');

        if (localStorageTheme) {
            setTheme(localStorageTheme as Themes);
        }

    }, [])

    const ToggleTheme = (mod: Themes) => {
        setTheme(mod);
        localStorage.setItem('theme', mod);
    }

    useEffect(() => {
        document.body.style.setProperty('--background', `var(--background-${theme})`);
        document.body.style.setProperty('--background-secondary-color', `var(--background-secondary-color-${theme})`);
        document.body.style.setProperty('--border', `var(--border-${theme})`);
        document.body.style.setProperty('--font-color', `var(--font-color-${theme})`);
        document.body.style.setProperty('--font-color-light', `var(--font-color-lighter-${theme})`);
        document.body.style.setProperty('--text-decoration-color', `var(--text-decoration-color-${theme})`);
        document.body.style.setProperty('--mongodb-color', `var(--mongodb-color-${theme})`);
        document.body.style.setProperty('--mysql-color', `var(--mysql-color-${theme})`);
        document.body.style.setProperty('--postgresql-color', `var(--postgresql-color-${theme})`);
        document.body.style.setProperty('--sql-color', `var(--sql-color-${theme})`);
        document.body.style.setProperty('--code-number-line-color', `var(--code-number-line-color-${theme})`);
        document.body.style.setProperty('--code-standard-color', `var(--code-standard-color-${theme})`);
        document.body.style.setProperty('--code-first-color', `var(--code-first-color-${theme})`);
        document.body.style.setProperty('--code-second-color', `var(--code-second-color-${theme})`);
        document.body.style.setProperty('--code-third-color', `var(--code-third-color-${theme})`);
        document.body.style.setProperty('--code-quotation-marks-color', `var(--code-quotation-marks-color-${theme})`);
        document.body.style.setProperty('--create-block-color', `var(--create-block-color-${theme})`);
        document.body.style.setProperty('--update-block-color', `var(--update-block-color-${theme})`);
        document.body.style.setProperty('--delete-block-color', `var(--delete-block-color-${theme})`);
        document.body.style.setProperty('--get-block-color', `var(--get-block-color-${theme})`);
    }, [theme])

    return (
        <div id="Header">
            <Link href="/" >
                <a id="HeaderTitle">DataBasesSatellite</a>
            </Link>
            <div id="HeaderLinks">
                <Link href="/mongodb">
                    <a className="HeaderLink mongodb">MongoDB</a>
                </Link>
                <Link href="/mysql">
                    <a className="HeaderLink mysql">MySQL</a>
                </Link>
                <Link href="/postgresql">
                    <a className="HeaderLink postgresql">PostgreSQL</a>
                </Link>
                <Link href="/sql">
                    <a className="HeaderLink sql">SQL</a>
                </Link>
            </div>
            <div id="HeaderTheme">
                <div id="HeaderThemeSection">
                    <div id="HeaderThemeLight"
                        onClick={() => ToggleTheme('light')}
                    >light</div>
                    <div id="HeaderThemeDark"
                        onClick={() => ToggleTheme('dark')}
                    >dark</div>
                </div>

            </div>
        </div>
    )
}

export default Header;