import React from 'react'
import { useRouter } from "next/router"
import HttpRequest from '../../../Utils/HttpRequest'

const {
    NEXT_PUBLIC_API_URL: apiUrl,
  } = process.env;

const template = () => {
    const [isOpenChange, setIsOpenChange] = React.useState(false)
    const router = useRouter()

    const ClosePopup = () => {
        setIsOpenChange(false)
      }

    let OpenPopup = () => {
        setIsOpenChange(true)
        router.push(router.asPath)
      }
    
    return (
        <div>
            {isOpenChange && (
                <div>
                <div>
                    <div>
                        <p>Wanna join this Carpool?</p>
                        <button onClick={ClosePopup}> X </button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default template