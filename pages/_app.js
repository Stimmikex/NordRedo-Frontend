import Layout from '../components/Layout.js';
// import '../styles/Utils.module.scss'

function MyApp({ Component, pageProps, user}) {
    return (
        <Layout {...pageProps} user={user.user}>
          <Component {...pageProps } user={user.user} />
        </Layout>
    )
}
MyApp.getInitialProps = async ({ ctx }) => {
    const cookie = ctx.req.headers.cookie;
    const res = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
      headers: { 
        cookie: cookie,
      }
    })
    const user = await res.json()
    return {
      user: {
        user,
      },
    }
  }

export default MyApp;