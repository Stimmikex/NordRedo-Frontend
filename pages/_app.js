import Layout from '../components/Layout.js';
// import '../styles/Utils.module.scss'

function MyApp({ Component, pageProps, user }) {
    return (
        <Layout {...pageProps}>
            {console.log(user)}
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
    console.log(user);
    return {
      props: {
        user,
      },
    }
  }

export default MyApp;