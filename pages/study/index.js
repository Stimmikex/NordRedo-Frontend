import { getUserWithCookie } from '../../components/fetchUserToken.js'
import StudyList from '../../components/Study/StudyList.js'
import Study from './Study.module.scss'
import React from 'react'
import Link from 'next/link';

const {
  NEXT_PUBLIC_API_URL: apiUrl,
} = process.env;

export default function Events({ user, classes }) {
  return (
      <div>
          <div>
              <i>This area is all work in progress (visit Study branch to check on progress)</i>
          </div>
          <div className={Study.classContainer}>
            <h1>Study</h1>
            <Link href='/study/add'>
              <button>Add Class</button>
            </Link>
            <StudyList classes={classes}></StudyList>
          </div>
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