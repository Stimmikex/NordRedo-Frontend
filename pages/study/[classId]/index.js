import { getUserWithCookie } from '../../../components/fetchUserToken.js'
import YearList from '../../../components/Study/YearList.js'
import React from 'react'
import Link from 'next/link';

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
            <Link href='/study/[classId]/year/add' as={`/study/${classer.id}/year/add`}>
              <button>Add Class</button>
            </Link>
            {console.log(years)}
            {
              years.length != 0 ?
                <YearList years={years} classer={classer} ></YearList>
              :
                <div>
                  <p>There are no years/notes for this class</p>
                  <p>Contect your admin to add years/notes</p>
                </div>
            }
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