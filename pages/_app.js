import Layout from '../components/Layout.js';
// import '../styles/Utils.module.scss'

function MyApp({ Component, pageProps }) {
    return (
        <Layout {...pageProps}>
        <Component {...pageProps} />
        </Layout>
    )
}
export async function getServerSideProps ({ctx}) {
    const cookie = ctx.req.headers.cookie;
    const res = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
      headers: { 
        cookie: cookie,
      }
    })
    const user = await res.json()
    return {
      props: {
        user,
      },
    }
  }

export default MyApp;