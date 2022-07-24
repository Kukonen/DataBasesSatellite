import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
    children: any;
}

const Layout = ({children } : LayoutProps) => {
    return (
        <>
            <Header/>
            <div id="main" style={{flex: 1}}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;