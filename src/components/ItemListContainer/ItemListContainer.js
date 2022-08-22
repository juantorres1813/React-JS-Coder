import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import {collection, getDocs } from 'firebase/firestore';
import db from "../../firebaseConfig";

const ItemListContainer = ({section}) => {
    const getProducts = async () => {
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    useEffect(()=>{
        getProducts()
        .then((res)=>{
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