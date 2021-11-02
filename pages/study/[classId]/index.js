import { getUserWithCookie } from '../../../components/fetchUserToken.js'
import React from 'react'

const {
  NEXT_PUBLIC_API_URL: apiUrl,
} = process.env;

export default function Events({ events, user, types }) {
  return (
      <div>
            <div>
                <i>This area is all work in progress (visit Study branch to check on progress)</i>
            </div>
            <h1>Class [Classname]</h1>
            <div>
                <h2>Name: [String name of notes]</h2>
                <h3>Download documents</h3>
                <p>Year: [String Year of class]</p>
                <p>Link: [String Link]</p>
                <p>Author: [String Username]</p>
            </div>
      </div>
  )
}

export async function getServerSideProps(ctx) {
  const res = await fetch(`${apiUrl}`)
  const events = await res.json()
  const resType = await fetch(`${apiUrl}/event/types`);
  const types = await resType.json();
  const user = await getUserWithCookie(ctx);
  console.log(events);
  return {
    props: {
      user,
      events,
      types,
    },
  }
}