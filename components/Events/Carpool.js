import React from 'react'
import AddCarpool from '../Users/Popups/AddCarpool'

function Carpool({carpool, poolers, user, cookie}) {
    return (
        <div>
            <ul>
                <li>Seats: {poolers.length}/{carpool.seats}</li>
                <li>User: {carpool.username}</li>
                {
                    <AddCarpool carpool={carpool} poolers={poolers} user={user} cookie={cookie}></AddCarpool>
                }
                {
                    [...Array(poolers.length)].map((e, i) => 
                        <div>
                            <p>{poolers[0].username}</p>
                            <img src={`../carpooling/carpoolred.png`} alt="image of a carpooling" />
                        </div>
                    )
                }
            </ul>
        </div>
    )
}

export default Carpool