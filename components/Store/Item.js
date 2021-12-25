import Link from 'next/link';
import itemStyles from '../../styles/ItemList.module.scss';

const Item = ({ item }) => {
    const calculateDiscount = (price, discount) => {
        if (discount === 0) {
            return price;
        } else {
            const newPrice = price - (price * (discount / 100))
            return newPrice;
        }
    }
    return (
        <div className={itemStyles.item}>
            <Link href='/store/[itemId]' as={`/store/${item.id}`}>
            <a>
                <div className={itemStyles.item_container}>
                    <div className={itemStyles.item_container_image}>
                        <img src={`./itemImages/${item.image}.jpg`} alt={item.image} />
                    </div>
                    {item.discount === 0 ? (
                        <div className={itemStyles.item_container_info}>
                            <div className={itemStyles.item_container_info_name}>
                                <h1>{item.name}</h1>
                            </div>
                            <div className={itemStyles.item_container_price}>
                                <p>Price: {item.price}</p>
                            </div>
                        </div>
                        ) : (
                            <div className={itemStyles.item_container_info}>
                                <div className={itemStyles.item_container_info_discount}>
                                    <p>{item.discount}%</p>
                                </div>
                                <div className={itemStyles.item_container_info_name}>
                                    <h1>{item.name}</h1>
                                </div>
                                <div className={itemStyles.item_container_price}>
                                    <p>Price: {calculateDiscount(item.price, item.discount)}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </a>
            </Link>
        </div>
    )
}

export default Item
