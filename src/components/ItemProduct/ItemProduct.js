import ItemCount from "../ItemCount/ItemCount"


const ItemProduct = ({data}) => {
    const {title, image, price, stock} = data

    return (
    <div className="item-product">
        <img src={`/assets/multimedia/${image}`} alt="imagen"/>
        <p>{title}</p>
        <span>$ {price}</span>
        <ItemCount stockProduct={stock} />
    </div>
    )
}

export default ItemProduct

/* entonces tienen 3 componentes 
ItemListContainer.js -> ItemList.js -> Ítem.js
ItemListContainer ahcer en llamado
ItemList hacen el map
Item muestran la info
el Item seria el ItemProduct del profe
*/