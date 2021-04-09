import React from 'react'

const change = ({ gov }) => {
    return (
        <div>
            <h1>Change Government</h1>
            {gov.map((gover) => {
            return (
                <div>
                    <h2>{gover.username}</h2>
                    <p>Year: {gover.year}</p>
                    <p>Title: {gover.title}</p>
                    <button>Change</button>
                </div>
            )
            })}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://nordredo-backend.herokuapp.com/admin/gov`);
    const gov = await res.json();
    return {
        props: {
            gov,
        },
    }
}

export default change
