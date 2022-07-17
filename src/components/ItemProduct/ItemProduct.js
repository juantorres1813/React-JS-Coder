

const ItemProduct = ({title, price, image}) => {
    return (
    <div className="item-product">
        <img src={`/assets/multimedia/${image}`} alt="imagen"/>
        <p>{title}</p>
        <span>$ {price}</span>
        <button>Comprar</button>
    </div>
    )
}

export default ItemProduct