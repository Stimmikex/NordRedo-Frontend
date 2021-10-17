import React from 'react'
import adsListStyle from './AdsList.module.scss';

const AdsList = ({ ads }) => {
    return (
        <div className={adsListStyle.adsContainer}>
            <h1>Sponsers of [Nemendafélag]</h1>
            <div className={adsListStyle.ads}>
                {ads.map((ad) => {
                    return (
                        <div className={adsListStyle.ad}>
                            <img src={`../../Ads/${ad.link}.png`}></img>
                            {/* <p>{ad.name}</p> */}
                            {/* <button>Change</button>
                            <button>Delete</button> */}
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default AdsList
