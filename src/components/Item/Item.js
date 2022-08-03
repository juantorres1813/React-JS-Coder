import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom';
import './Item.css'


const Item = ({data}) => {
    const {title, image, price, stock, id} = data
    return (
        <div className="item-product">
            <Link to={`/item/${id}`} >
                <img src={`/assets/multimedia/${image}`} alt="imagen"/>
                <p>{title}</p>
                <span>$ {price}</span>
            </Link>
            <ItemCount stockProduct={stock} />
        </div>
    )
}

export default Item
