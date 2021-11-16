import { getUserWithCookie } from '../../../components/fetchUserToken.js'
import YearList from '../../../components/Study/YearList.js'
import React from 'react'

const {
  NEXT_PUBLIC_API_URL: apiUrl,
} = process.env;

export default function Events({ user, classer, years }) {
  return (
      <div>
            <div>
                <i>This area is all work in progress (visit Study branch to check on progress)</i>
            </div>
            <h1>{classer.name}</h1>
            <h2>Here are some years that have notes</h2>
            <YearList years={years} classer={classer}></YearList>
      </div>
  )
}

export async function getServerSideProps({ params, req }) {
  const resClass = await fetch(`${apiUrl}/study/class/${params.classId}`);
  const classer = await resClass.json();
  const resYear = await fetch(`${apiUrl}/study/class/${params.classId}/year`);
  const years = await resYear.json();
  const cookie = req.headers.cookie || null;
  const resUser = await fetch(`${apiUrl}/users/me`, {
    headers: {
      cookie: cookie,
    }
  })
  const user = await resUser.json()
  return {
    props: {
      user,
      classer,
      years,
    },
  }
}