import React from 'react'
import ItemList from '../../components/Store/ItemList.js';

const index = ({ items, user }) => {
    return (
        <div>
            <h1>[Nemendafélag BookStore]</h1>
            <ItemList items={items}></ItemList>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://nordredo-backend.herokuapp.com/store')
    const items = await res.json()
    const cookie = ctx.req.headers.cookie;
    const resUser = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
    headers: { 
        cookie: cookie,
    }
    })
    const user = await resUser.json()
    return {
      props: {
        items,
        user,
      },
    }
}

export default index
