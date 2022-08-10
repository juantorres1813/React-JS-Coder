import detailmock from "../../utils/details.mock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const getItem = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(detailmock)
        }, 2000)
    })

    const {id} = useParams()

    useEffect(()=>{
        getItem
        .then((res)=>{
            //console.log(res)
            FilterbyID(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [id])

    const FilterbyID = () =>{
        detailmock.some((product)=>{
            if (product.id.toString() === id) {
                setProductData(product)
            }
        })
    }

    const [productData, setProductData] = useState([])

    return (
    <div>
        <ItemDetail data={productData}/>
    </div>
    )
}

export default ItemDetailContainer