import React from 'react'
import { useRouter } from "next/router"
import AddCarpool from './Popups/AddCarpool';
import Carpool from './Carpool';
import HttpRequest from '../Utils/HttpRequest'

function CarpoolList({event, carpools, pooler, user, cookie }) {
    const router = useRouter()

    const {
        NEXT_PUBLIC_API_URL: apiUrl,
      } = process.env;

    /**
     * Ég verð að afsaka mig fyrir slæm vinnubrögð en þetta var það eina sem var að virka eftir nokkra tíma af því að reyna við þetta nextjs drasl
     * @param {Object user} user 
     * @param {[Object object] carpool} carpoolers 
     * @returns check (count)
     */
    const checkIfUserIsPooler = (user, carpoolers) => {
        let check = 0
        carpoolers.forEach(carpooler => {
            if (user.id === carpooler.user_id) {
                check += 1
            }
        });
        return check
    }

    const carpoolDeleteFunction = async (carpool) => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            cookie: cookie,
        }

        const res = await fetch(`${apiUrl}/event/delete/carpool/${carpool}`, options)

        const result = await res.json()
        alert(result.msg)
        router.reload()
    }

    return (
        <div>
            <h1>Carpool</h1>
            {carpools.map((carpool) => {
                return (
                    <div>
                        <Carpool carpool={carpool} key={carpool.id} pooler={pooler} user={user} cookie={cookie}></Carpool>
                        <div>
                            {
                                user.role_id === 3 || user.id === carpool.user_id?
                                    <button onClick={e => carpoolDeleteFunction(carpool.id)}>Delete Carpool</button>
                                :
                                    <p></p> 
                            }
                        </div>
                    </div>
                )
            })}
            {
                checkIfUserIsPooler(user, carpools) == 0 ?
                        <AddCarpool event={event} cookie={cookie} user={user}></AddCarpool>
                    :
                        <p></p>
            }
        </div>
    )
}

export default CarpoolList