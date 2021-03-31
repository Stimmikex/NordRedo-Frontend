import EventList from '../../components/Events/EventList.js';

export default function Events({ events }) {
  return (
    <div>
      <EventList events={events} get={"All"}></EventList>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://nordredo-backend.herokuapp.com/')
  const events = await res.json()
  console.log(events);
  return {
    props: {
      events,
    },
  }
}