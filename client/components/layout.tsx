import Meta from "./meta";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
    children: any;
    title?: string;
}

const Layout = ({children, title } : LayoutProps) => {
    return (
        <>
            <Meta title={title}/>
            <Header/>
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;