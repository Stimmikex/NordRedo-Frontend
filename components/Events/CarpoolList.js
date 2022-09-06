import React from 'react'
import Carpool from './Carpool';

function CarpoolList({carpools, poolers, user, cookie}) {
    return (
        <div>
            <h1>Carpool</h1>
            {carpools.map((carpool) => {
                return (
                    <Carpool carpool={carpool} key={carpool.id} poolers={poolers} user={user} cookie={cookie}></Carpool>
                )
            })}
            <button>Register as a carpooler</button>
        </div>
    )
}

export default CarpoolList