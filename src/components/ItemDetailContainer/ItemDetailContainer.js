import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import db from "../../firebaseConfig";
import {doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)



    const { id } = useParams()

    useEffect(() => {
        getDoc(doc(db, 'productos', id)).then(response => {
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        }).catch(e => {
            console.log(e)
        }).finally(() =>{
        setLoading(false, 2500)
        })
    }, [id])


    if(loading){
    return <div className='loading'>
        <img src="/assets/multimedia/logo.jpg" alt="logo" />
        <h1 >Cargando...</h1>
    </div>
    }

    return (
        <div>
            <ItemDetail data={product}/>
        </div>
    )
}

export default ItemDetailContainer