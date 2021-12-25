export async function getUserWithCookie(ctx) {
    const cookie = ctx.req.headers.cookie;
    const resUser = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
    headers: { 
        cookie: cookie,
    }
    })
    const user = await resUser.json()
    return user;
}
