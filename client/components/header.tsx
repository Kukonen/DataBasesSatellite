import Link from 'next/link'

const Header = () => {
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
                    <div id="HeaderThemeActiveBlock">light</div>
                    <div id="HeaderThemeNotActiveBlock">dark</div>
                </div>

            </div>
        </div>
    )
}

export default Header;