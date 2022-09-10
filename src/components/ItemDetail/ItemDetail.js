import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css';
import { useState} from "react";
import {Link} from 'react-router-dom'

const ItemDetail = ({data}) => {
    const {title, image, price, stock, image2, image3, description} = data

    const [quantitySelected, setQuantitySelected] = useState(0)

    return (
    <div className="item-detail">
        <img className="img-main" src={`/assets/multimedia/${image}`} alt="imagen"/>
        <div className="rest-info">
            <div className="img-row">
            <img src={`/assets/multimedia/${image2}`} alt="imagen"/>
            <img src={`/assets/multimedia/${image3}`} alt="imagen"/>
            </div>
            <p className="details-title">{title}</p>
            <p className="details-desc">{description}</p>
            <span>$ {price}</span>
            <h3>{stock} disponibles</h3>
            {quantitySelected > 0 ? <button className="btn btn-primary"><Link to="/cart">TERMINAR COMPRA</Link></button> : <ItemCount stockProduct={stock} setQuantitySelected={setQuantitySelected} productData={data} />}
        </div>
    </div>
    )
}

export default ItemDetail