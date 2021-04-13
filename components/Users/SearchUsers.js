import React from 'react'
import User from './Users';

const SearchUsers = ({ users, roles }) => {
    let [search, setSearch] = React.useState(users)

    const handleChange = async (e) => {
        const test = e.target.value;
        const res = await fetch(`https://nordredo-backend.herokuapp.com/users/find/?name=${test}`);
        const results = await res.json();
        console.log(results)
        setSearch(results);
      }
    return (
        <div>
            <h2>Search Bar</h2>
            <input type="text" onChange={handleChange}/>
            {search.map((user) => {
            return (
                <User user={user} key={user.id} roles={roles}></User>
            )
            })}
        </div>
    )
}

export default SearchUsers
