import React from 'react'

const AdsList = ({ getAds }) => {
    return (
        <div>
            {getAds.map((ad) => {
                return (
                    <div>
                        <div>
                            <img src={ad.link}></img>
                            <p>{ad.name}</p>
                            <Link></Link><button>Change</button>
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
