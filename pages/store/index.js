import React from 'react'
import ItemList from '../../components/Store/ItemList.js';

const index = ({ items }) => {
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
    console.log(items);
    return {
      props: {
        items,
      },
    }
  }

export default index
