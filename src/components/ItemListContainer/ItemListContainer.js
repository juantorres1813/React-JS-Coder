import ItemProduct from "../ItemProduct/ItemProduct";


const ItemListContainer = ({section}) => {
    const product1 = {
        title:"Campera",
        price:12000,
        image:'logo.jpg',
        stock:6
    }
    const product2 = {
        title:"Remera",
        price:1900,
        image:'logo.jpg',
        stock:5
    }
    return (
    <div>
        <h3>{section}</h3>
        <ItemProduct data={product1}/>
        <ItemProduct data={product2}/>
    </div>
    )
}

export default ItemListContainer