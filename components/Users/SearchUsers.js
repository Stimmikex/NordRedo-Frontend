import React from 'react'
import User from './Users';
import userPop from '../../styles/UserPopup.module.scss'

const SearchUsers = ({ users, roles, type}) => {
    let [search, setSearch] = React.useState(users)

    const handleChange = async (e) => {
        const test = e.target.value;
        const res = await fetch(`https://nordredo-backend.herokuapp.com/users/find/?name=${test}`);
        const results = await res.json();
        console.log(results)
        setSearch(results);
      }
    return (
        <div className={userPop.searchpop_container_searchbar}>
            <h2>Search Bar</h2>
            <input type="text" onChange={handleChange}/>
            <div>
                {search.map((user) => {
                return (
                    <User user={user} key={user.id} roles={roles} type={type}></User>
                )
                })}
            </div>
        </div>
    )
}

export default SearchUsers
