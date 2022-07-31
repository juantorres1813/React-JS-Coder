import Products from "../../utils/products.mock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({section}) => {
    const getProducts = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(Products)
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
    <div>
        <h3>{section}</h3>
        <ItemList dataProducts={listProducts} />
    </div>
    )
}

export default ItemListContainer