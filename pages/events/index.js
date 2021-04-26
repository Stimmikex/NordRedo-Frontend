import EventList from '../../components/Events/EventList.js';
import { getUserWithCookie } from '../../components/fetchUserToken.js'

export default function Events({ events, user }) {
  return (
      <div>
        <h1>Event List</h1>
        <EventList events={events} get={"All"} user={user}></EventList>
      </div>
  )
}

export async function getServerSideProps(ctx) {
  const res = await fetch('https://nordredo-backend.herokuapp.com/')
  const events = await res.json()
  const user = await getUserWithCookie(ctx);
  console.log(events);
  return {
    props: {
      user,
      events,
    },
  }
}