import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom';


const Item = ({data}) => {
    const {title, image, price, stock, id} = data

    return (
        <div className="item-product">
            <Link to={`/catalogo/${id}`} >
                <img src={`/assets/multimedia/${image}`} alt="imagen"/>
                <p>{title}</p>
                <span>$ {price}</span>
                <ItemCount stockProduct={stock} />
            </Link>
        </div>
    )
}

export default Item
