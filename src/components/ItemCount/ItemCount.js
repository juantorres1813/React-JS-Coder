import { useState, useEffect } from 'react'

function ItemCount({ stockProduct, setQuantitySelected}) {
    const [contador, setContador] = useState(0)
    
    const addNumber = () =>{
        if(contador<stockProduct){
            setContador(contador + 1)
        }
    }

    const removeNumber = () => {
        if(contador>1)
        setContador(contador - 1)
    }

    const onAdd = () => {
        setQuantitySelected(contador)
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