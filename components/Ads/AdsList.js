import React from 'react'

const AdsList = ({ getAds }) => {
    return (
        <div>
            <h1>Ad List</h1>
            {getAds.map((ad) => {
                return (
                    <div>
                        <div>
                            <img src={ad.link}></img>
                            <p>{ad.name}</p>
                            <button>Change</button>
                            <button>Delete</button>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default AdsList
