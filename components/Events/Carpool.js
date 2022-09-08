import React from 'react'
import JoinCarpool from '../Users/Popups/Carpool/JoinCarpool'

function Carpool({carpool, poolers, user, cookie}) {
    return (
        <div>
            <ul>
                <li>Seats: {poolers.length}/{carpool.seats}</li>
                <li>User: {carpool.username}</li>
                <div>
                {
                    <JoinCarpool carpool={carpool} poolers={poolers} user={user} cookie={cookie}></JoinCarpool>
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