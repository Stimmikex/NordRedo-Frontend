import React from 'react'

const {
  NEXT_PUBLIC_API_URL: apiUrl,
} = process.env;

export default function Events({ user, classes, year, notes }) {
  return (
      <div>
          <div>
              <i>This area is all work in progress (visit Study branch to check on progress)</i>
          </div>
          <div>
            <h1>Add Note</h1>
          </div>
      </div>
  )
}

export async function getServerSideProps({ params, req }) {
  const resStudy = await fetch(`${apiUrl}/study`);
  const classes = await resStudy.json();
  const resYear = await fetch(`${apiUrl}/study/class/year/${params.yearId}`);
  const year = await resYear.json();
  const resNotes = await fetch(`${apiUrl}/study/class/year/${params.yearId}/notes`);
  const notes = await resNotes.json();
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
      classes,
      year,
      notes,
    },
  }
}