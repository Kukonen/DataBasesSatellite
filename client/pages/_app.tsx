import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/layout";
import {Provider} from "react-redux";
import store from "../store/store";
import '../styles/_app.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp
