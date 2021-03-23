import Layout from '../components/Layout.js';
// import '../styles/Utils.module.scss'

function MyApp({ Component, pageProps}) {
    return (
        <Layout>
        <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;