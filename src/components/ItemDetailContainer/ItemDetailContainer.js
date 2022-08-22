import detailmock from "../../utils/details.mock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import db from "../../firebaseConfig";
import {doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const {id} = useParams()

    useEffect(()=>{
        getProduct()
        .then((res)=>{
            //console.log(res)
            setProductData(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [id])

    const getProduct = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }

    const [productData, setProductData] = useState([])

    return (
    <div>
        <ItemDetail data={productData}/>
    </div>
    )
}

export default ItemDetailContainer