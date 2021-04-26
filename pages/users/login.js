import LoginSession from '../../components/Users/IronSession/LoginSession'
import LoginForm from '../../components/Users/LoginForm'

export default function Login({ user }) {
    return (
        <LoginForm /> 
    )
}

export async function getServerSideProps(ctx) {
    const cookie = ctx.req.headers.cookie;
    const resUser = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
    headers: { 
        cookie: cookie,
    }
    })
    const user = await resUser.json()
    return {
        props: {
            user,
        },
    }
}