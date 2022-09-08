import React from 'react'
import AddCarpool from './Popups/AddCarpool';
import Carpool from './Carpool';

function CarpoolList({event, carpools, pooler, user, cookie}) {
    return (
        <div>
            <h1>Carpool</h1>
            {carpools.map((carpool) => {
                return (
                    <Carpool carpool={carpool} key={carpool.id} pooler={pooler} user={user} cookie={cookie}></Carpool>
                )
            })}
            <AddCarpool event={event} cookie={cookie} user={user}></AddCarpool>
        </div>
    )
}

export default CarpoolList