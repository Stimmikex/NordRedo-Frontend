import React from 'react'
import EventList from '../components/Events/EventList.js';
import ItemList from '../components/Store/ItemList.js';


export default function index({ events, items }) {
    return (
        <div>
          <div>
            <h1>Upcoming Events</h1>
            <EventList events={events} get={"Active"}></EventList>
          </div>
          <div>
            <h1>BookStore</h1>
            <ItemList items={items}></ItemList>
          </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://nordredo-backend.herokuapp.com/')
    const events = await res.json()
    const itemRes = await fetch('https://nordredo-backend.herokuapp.com/store')
    const items = await itemRes.json()
    console.log(events);
    return {
      props: {
        events,
        items,
      },
    }
  }
