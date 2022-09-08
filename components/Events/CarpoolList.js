import React from 'react'
import AddCarpool from '../Users/Popups/Carpool/AddCarpool';
import Carpool from './Carpool';

function CarpoolList({event, carpools, poolers, user, cookie}) {
    return (
        <div>
            <h1>Carpool</h1>
            {carpools.map((carpool) => {
                return (
                    <Carpool carpool={carpool} key={carpool.id} poolers={poolers} user={user} cookie={cookie}></Carpool>
                )
            })}
            <AddCarpool event={event} cookie={cookie} user={user}></AddCarpool>
        </div>
    )
}

export default CarpoolList