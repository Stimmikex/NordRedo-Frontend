import React from 'react'
import User from './Users';
import userPop from '../../styles/UserPopup.module.scss'
import userStyles from './Users.module.scss'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const SearchUsers = ({ users, roles, type, gover, cookie }) => {
    let [search, setSearch] = React.useState(users)

    const handleChange = async (e) => {
        const test = e.target.value;
        const res = await fetch(`${apiUrl}/users/find/?name=${test}`, {
            headers: { 
                cookie: cookie,
            }
        });
        const results = await res.json();
        console.log(results)
        setSearch(results);
      }
    return (
        <div className={userStyles.search_container_searchbar}>
            <h2>Search Bar</h2>
            <input type="text" onChange={handleChange}/>
            <div className={userStyles.userListContainer}>
                {search.map((user) => {
                return (
                    <User user={user} key={user.id} roles={roles} type={type} gover={gover} cookie={cookie}></User>
                )
                })}
            </div>
        </div>
    )
}

export default SearchUsers
