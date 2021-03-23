import EventList from '../../components/EventList.js';

export default function Events({ events }) {
  return (
    <div>
      <EventList events={events}></EventList>
    </div>
  )
}
  
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://nordredo-backend.herokuapp.com/')
  const events = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  console.log(events);
  return {
    props: {
      events,
    },
  }
}