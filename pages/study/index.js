import { getUserWithCookie } from '../../components/fetchUserToken.js'
import Study from './Study.module.scss'
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
          <div className={Study.classContainer}>
            <h1>Study</h1>
            <div className={Study.class}>
                <a href="/study/1">
                    <div className={Study.class__image}>
                        <img src="test"></img>
                    </div>
                    <div className={Study.class__info}>
                        <h2>Class: [Name here]</h2>
                        <i>Description: [text]</i>
                        <p>Number of posts: [int number]</p>
                        <p>Years: [int number] - [int number]</p>
                    </div>
                </a>
            </div>
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