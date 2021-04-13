import React from 'react'
import User from './Users';

const SearchUsers = ({ roles }) => {
    let [search, setSearch] = React.useState()

    const handleChange = async (e) => {
        const test = e.target.value;
        const res = await fetch(`https://nordredo-backend.herokuapp.com/users/find/?name=${test}`);
        const results = await res.json();
        setSearch(results);
      }
    return (
        <div>
            <h2>Search Bar</h2>
            <input type="text" onChange={handleChange}/>
            {console.log(search)}
            {search.map((user) => {
            return (
                <User user={user} key={user.id} roles={roles}></User>
            )
            })}
        </div>
    )
}

export default SearchUsers
