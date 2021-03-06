import { useState, useEffect } from 'react'

function ItemCount({ stockProduct, action}) {
    const [contador, setContador] = useState(1)
    
    const addNumber = () =>{
        if(contador<stockProduct){
            setContador(contador + 1)
        }
    }

    const removeNumber = () => {
        if(contador>1)
        setContador(contador - 1)
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
            <button onClick={action}>Comprar</button>
        </div>
)}


export default ItemCount