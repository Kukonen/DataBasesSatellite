import Link from 'next/link'

const Header = () => {
    return (
        <div id="Header">
            <Link href="/" >
                <a id="HeaderTitle">DataBasesSatellite</a>
            </Link>
            <div id="HeaderLinks">
                <Link href="/">
                    <a className="HeaderLink">MongoDB</a>
                </Link>
                <Link href="/">
                    <a className="HeaderLink">MySQL</a>
                </Link>
                <Link href="/">
                    <a className="HeaderLink">PostgreSQL</a>
                </Link>
            </div>
            <div id="HeaderTheme">
                <div id="HeaderThemeSection">
                    <div id="HeaderThemeActiveBlock">light</div>
                    <div id="HeaderThemeNotActiveBlock">dark</div>
                </div>

            </div>
        </div>
    )
}

export default Header;