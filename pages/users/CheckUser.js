function checkUser(ctx) {
    async function getServerSideProps() {
        const cookie = ctx.req.headers.cookie;
        console.log(cookie);
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
      getServerSideProps();
}

