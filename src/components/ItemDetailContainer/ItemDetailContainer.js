import detailmock from "../../utils/details.mock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"

const ItemDetailContainer = () => {
    const getItem = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(detailmock)
        }, 2000)
    })

    useEffect(()=>{
        getItem
        .then((res)=>{
            //console.log(res)
            setlistItem(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])

    const [listItem, setlistItem] = useState({})

    return (
    <div>
        <ItemDetail dataProduct={listItem}/>
    </div>
    )
}

export default ItemDetailContainer