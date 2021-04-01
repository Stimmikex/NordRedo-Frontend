import React from 'react'
import Item from './Item';
import itemStyles from '../../styles/ItemList.module.scss';

const ItemList = ({ items }) => {
    return (
        <div className={itemStyles.item_list}>
            {items.map((item) => {
            return (
                <Item item={item} key={item.id}></Item>
            )
            })}
        </div>
    )
}

export default ItemList
