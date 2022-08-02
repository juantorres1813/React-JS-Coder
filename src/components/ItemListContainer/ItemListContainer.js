import detailmock from "../../utils/details.mock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'

const ItemListContainer = ({section}) => {
    const getProducts = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(detailmock)
        }, 2000)
    })

    useEffect(()=>{
        getProducts
        .then((res)=>{
            //console.log(res)
            setlistProducts(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])

    const [listProducts, setlistProducts] = useState([])

    return (
    <div className="list-products">
        <h3>{section}</h3>
        <ItemList dataProducts={listProducts} />
    </div>
    )
}

export default ItemListContainer