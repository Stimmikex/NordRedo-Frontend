import EventAddForm from '../../components/Events/EventAddForm.js'

export default function AddEvent({ types, cookie, user }) {
    return (
        <EventAddForm types={types} cookie={cookie} user={user} /> 
    )
}

export async function getServerSideProps(ctx) {
    const resTypes = await fetch('https://nordredo-backend.herokuapp.com/event/types')
    const types = await resTypes.json()
    const cookie = ctx.req.headers.cookie;
    console.log(cookie);
    const resUser = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
      headers: {
        cookie: cookie,
      }
    })
    const user = await resUser.json()
    console.log(user);
    return {
      props: {
        user,
        types,
      },
    }
  }