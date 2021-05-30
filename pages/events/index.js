import EventList from '../../components/Events/EventList.js';
import { getUserWithCookie } from '../../components/fetchUserToken.js'
import eventSearch from './EventSearch.module.scss'

const {
  NEXT_PUBLIC_API_URL: apiUrl,
} = process.env;

export default function Events({ events, user, types }) {
  return (
      <div>
        <h1>Event List</h1>
        <div className={eventSearch.eventSearch}>
          <h1>Event Search</h1>
          <div className={eventSearch.eventSearch_text}>
            <label>Search Name: </label>
            <input type="text"></input>
          </div>
          <div className={eventSearch.eventSearch_addons}>
            <div className={eventSearch.eventSearch_addons_active}>
              <label>Active: </label>
              <input type="checkbox"></input>
            </div>
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
                {console.log(types)}
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
          <button className={eventSearch.eventSearch_searchBtn}>Search</button>
        </div>
        <EventList events={events} get={"All"} user={user}></EventList>
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