import React from 'react'
import EventList from '../components/Events/EventList.js';

export default function index({ events }) {
    return (
        <div>
            <h1>Upcoming Events</h1>
            <EventList events={events} get={"Active"}></EventList>
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
