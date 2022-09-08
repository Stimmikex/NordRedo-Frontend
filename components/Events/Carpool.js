import React from 'react'
import JoinCarpool from './Popups//JoinCarpool'
import carpoolPop from './Popups/CarpoolStyle.module.scss'

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
        <div onLoad={e => getPoolers()} className={carpoolPop.carpoolList}>
            <div className={carpoolPop.carpoolListContainer}>
                <p>Seats: {poolers.length}/{carpool.seats}</p>
                <p>User: {carpool.username}</p>
                <div className={carpoolPop.carpoolListContainer__main}>
                    {
                        <JoinCarpool carpool={carpool} poolers={poolers} user={user} cookie={cookie}></JoinCarpool>
                    }
                    <div className={carpoolPop.carpoolListContainer__taken}>
                    {
                        [...Array(poolers.length)].map((e, i) => 
                                <p>{poolers[i].username}<img src={`../carpooling/carpoolred.png`} alt="image of a carpooling" /></p>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carpool