import EventList from '../../components/Events/EventList.js';
import { getUserWithCookie } from '../../components/fetchUserToken.js'
import eventSearch from './EventSearch.module.scss'
import React from 'react'

const {
  NEXT_PUBLIC_API_URL: apiUrl,
} = process.env;

export default function Events({ events, user, types }) {
  let [search, setSearch] = React.useState(events)

  const handleChange = async (e) => {
      const test = e.target.value;
      const res = await fetch(`${apiUrl}/event/search/?title=${test}&postdate=ASC&type=viso`);
      const results = await res.json();
      console.log(results)
      setSearch(results);
    }
  return (
      <div>
        <h1>Event List</h1>
        <div className={eventSearch.eventSearch}>
          <h1>Event Search</h1>
          <div className={eventSearch.eventSearch_text}>
            <input type="text" placeholder="Search title" onChange={handleChange}></input>
          </div>
          {/* <div className={eventSearch.eventSearch_addons}>
            <div className={eventSearch.eventSearch_addons_post}>
              <label>Postdate: </label>
              <select>
                <option selected>None</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
            <div className={eventSearch.eventSearch_addons_type}>
              <label>Type: </label>
              <select>
                <option selected>All</option>
                {
                  types.map((type) => {
                    return (
                      <option>{type.name}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
          <button className={eventSearch.eventSearch_searchBtn}>Search</button> */}
        </div>
        <div>
           {
            search.length == 0 ? (
              <p>No Events found</p>
            ) : (
              <EventList events={search} user={user}></EventList>
            )
           }
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
  return {
    props: {
      user,
      events,
      types,
    },
  }
}