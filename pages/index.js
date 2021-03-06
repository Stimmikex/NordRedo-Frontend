import React from 'react'
import EventList from '../components/Events/EventList.js';
import ItemList from '../components/Store/ItemList.js';
import { getUserWithCookie } from '../components/fetchUserToken.js'

const {
  NEXT_PUBLIC_API_URL: apiUrl,
} = process.env;

export default function index({ events, items, user }) {
    return (
        <div>
          <div>
            <h1>Upcoming Events</h1>
            <EventList events={events} get={"Active"} user={user}></EventList>
          </div>
          <div>
            <h1>BookStore</h1>
            <ItemList items={items}></ItemList>
          </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`${apiUrl}`)
    const events = await res.json()
    const itemRes = await fetch(`${apiUrl}/store`)
    const items = await itemRes.json()
    const user = await getUserWithCookie(ctx);
    return {
      props: {
        events,
        items,
        user,
      },
    }
  }
