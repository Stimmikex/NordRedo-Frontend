import React from 'react'

const Profile = ({ user }) => {
    return (
        <div>
          <div>
            <h1>Profile</h1>
            <div>
              <img src={user.profile.image}></img>
            </div>
            <div>
              <p>Username: {user.username}</p>
              <p>Role: {user.role_id}</p>
            </div>
            <div>
              <p>Fullname: {user.profile.name}</p>
              <p>Email: {user.profile.email1}</p>
              <p>Phonenumber: {user.profile.phonenumber1}</p>
            </div>
          </div>
        </div>
    )
}

export default Profile
