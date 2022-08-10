import { useState, useEffect, useContext } from 'react'
import { CartContext } from "../../context/CartContext";

function ItemCount({ stockProduct, setQuantitySelected, productData}) {
    const [contador, setContador] = useState(1)
    
    const addNumber = () =>{
        if(contador<stockProduct){
            setContador(contador + 1)
        }
    }

    const {addToCart} = useContext(CartContext)

    const removeNumber = () => {
        if(contador>1)
        setContador(contador - 1)
    }

    const onAdd = () => {
        setQuantitySelected(contador)
        //console.log(productData)
        addToCart({ ...productData, contador })

    }


    useEffect( () => {
    }, [contador])

    return(
        <div>
            <div className='countProd'>
                <button onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button onClick={onAdd}>AGREGAR AL CARRITO</button>
        </div>
)}


export default ItemCount