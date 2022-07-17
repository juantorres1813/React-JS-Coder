import ItemProduct from "../ItemProduct/ItemProduct";


const ItemListContainer = ({section}) => {
    return (
    <div>
        <h3>{section}</h3>
        <ItemProduct title="Campera" price={12000} image={'logo.jpg'}/>
        <ItemProduct title="Pantalon" price={7600} image={'logo.jpg'}/>
    </div>
    )
}

export default ItemListContainer