import ItemCount from "../ItemCount/ItemCount"


const Item = ({data}) => {
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

export default Item
