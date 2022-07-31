import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css';


const ItemDetail = ({dataProduct}) => {
    const {title, image, price, stock, image2, image3, description} = dataProduct

    return (
    <div className="item-detail">
        <img className="img-main" src={`/assets/multimedia/${image}`} alt="imagen"/>
        <div className="rest-info">
            <div className="img-row">
            <img src={`/assets/multimedia/${image2}`} alt="imagen"/>
            <img src={`/assets/multimedia/${image3}`} alt="imagen"/>
            </div>
            <p>{title}</p>
            <p>{description}</p>
            <span>$ {price}</span>
            <ItemCount stockProduct={stock}/>
            <h2>{stock} Unidades disponibles</h2>
            <button className="btn btn-primary">Agregar al Carrito</button>
            <button className="btn btn-primary">Volver</button>
        </div>
    </div>
    )
}

export default ItemDetail