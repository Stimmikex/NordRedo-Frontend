import React from 'react'
import Carpool from './Carpool';

function CarpoolList({carpools, poolers}) {
    return (
        <div>
            <h1>Carpool</h1>
            {carpools.map((carpool) => {
                return (
                    <Carpool carpool={carpool} key={carpool.id} poolers={poolers}></Carpool>
                )
            })}
            <button>Register as a carpooler</button>
        </div>
    )
}

export default CarpoolList