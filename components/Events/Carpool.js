import React from 'react'

function Carpool({carpool, poolers}) {
    return (
        <div>
            <ul>
                <li>Seats: {poolers.length}/{carpool.seats}</li>
                <li>User: {carpool.username}</li>
                {console.log(Array(Number(carpool.seats)))}
                {
                    [...Array(carpool.seats - poolers.length)].map((e, i) => 
                        <button><img src={`../carpooling/carpool.png`} alt="image of a carpooling" /></button>
                    )
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