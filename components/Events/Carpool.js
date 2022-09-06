import React from 'react'
import AddCarpool from '../Users/Popups/AddCarpool'

function Carpool({carpool, poolers, user, cookie}) {
    return (
        <div>
            <ul>
                <li>Seats: {poolers.length}/{carpool.seats}</li>
                <li>User: {carpool.username}</li>
                <div>
                {
                    <AddCarpool carpool={carpool} poolers={poolers} user={user} cookie={cookie}></AddCarpool>
                }
                    <div>
                    {
                        [...Array(poolers.length)].map((e, i) => 
                                <p>{poolers[i].username}<img src={`../carpooling/carpoolred.png`} alt="image of a carpooling" /></p>
                        )
                    }
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Carpool