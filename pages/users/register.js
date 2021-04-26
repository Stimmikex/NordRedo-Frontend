import RegisterForm from '../../components/Users/RegisterForm.js'

export default function Login({ user }) {
    return (
        <RegisterForm /> 
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