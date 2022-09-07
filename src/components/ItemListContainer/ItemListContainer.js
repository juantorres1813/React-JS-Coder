import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from "../../firebaseConfig";
import { useParams } from "react-router-dom";



const ItemListContainer = ({section}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {category} = useParams()

    useEffect(() => {

        const colletionRef = category
        ? query(collection(db, "productos"), where("category", "==", category))
        : collection(db, "productos")

        getDocs(colletionRef).then(response =>{
            const products = response.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        }).catch(e => {
            console.log(e)
        }).finally(() =>{
            setLoading(false, 2500)
        })
    }, [category])

    if(loading){
        return <div className='loading'>
            <img src="/assets/multimedia/logo.jpg" alt="logo" />
            <h1 >Cargando...</h1>
        </div>
        }


    return (
    <div className="list-products">
        <h3>{section}</h3>
        <ItemList dataProducts={products} />
    </div>
    )
}

export default ItemListContainer