import { getUserWithCookie } from '../../components/fetchUserToken.js'
import React from 'react'

const {
  NEXT_PUBLIC_API_URL: apiUrl,
} = process.env;

export default function Events({ user, classes }) {
  return (
      <div>
          <h1>Add Class</h1>
      </div>
  )
}

export async function getServerSideProps(ctx) {
  const resStudy = await fetch(`${apiUrl}/study`);
  const classes = await resStudy.json();
  const user = await getUserWithCookie(ctx);
  return {
    props: {
      user,
      classes,
    },
  }
}