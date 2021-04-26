import React from 'react'
import calendarStyle from './Calendar.module.scss';

const calendar = () => {
    return (
        <div className={calendarStyle.calenderContainer}>
            <h1>Welcome to the calendar</h1>
            <iframe src="https://calendar.google.com/calendar/embed?src=styrmir97%40gmail.com&ctz=Atlantic%2FReykjavik"></iframe>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const cookie = ctx.req.headers.cookie;
    const resUser = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
    headers: { 
        cookie: cookie,
    }
    })
    const user = await resUser.json()
    return {
      props: {
        user,
      },
    }
  }


export default calendar;