import React from 'react'
import JoinCarpool from '../Users/Popups/Carpool/JoinCarpool'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

function Carpool({carpool, user, cookie}) {
    let [poolers, setPoolers] = React.useState('')
    const getPoolers = async (e) => {
        const res = await fetch(`${apiUrl}/event/pooler/${carpool.id}`, {
            headers: { 
                cookie: cookie,
            }
        });
        const results = await res.json();
        console.log("res:" + results)
        setPoolers(results);
      }
    return (
        <div onLoad={e => getPoolers()}>
            <ul>
                <li>Seats: {poolers.length}/{carpool.seats}</li>
                <li>User: {carpool.username}</li>
                <div onLoad={getPoolers}>
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