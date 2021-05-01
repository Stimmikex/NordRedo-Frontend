import EventAddForm from '../../components/Events/EventAddForm.js'
import { ifUserAdmin } from '../../components/NavFunctions';

const {
  NEXT_PUBLIC_API_URL: apiUrl,
} = process.env;

export default function AddEvent({ types, cookie, user }) {
    return (
        <EventAddForm types={types} cookie={cookie} user={user} /> 
    )
}

export async function getServerSideProps(ctx) {
    const resTypes = await fetch(`${apiUrl}/event/types`)
    const types = await resTypes.json()
    const cookie = ctx.req.headers.cookie;
    console.log(cookie);
    const resUser = await fetch(`${apiUrl}/users/me`, {
      headers: {
        cookie,
      }
    })
    const user = await resUser.json()
    if (!ifUserAdmin(user)) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    return {
      props: {
        user,
        cookie,
        types,
      },
    }
  }