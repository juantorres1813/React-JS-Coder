import {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

    const {CartProducts ,deleteProduct, clear } = useContext(CartContext)

    return (
        <>
        <h1>Checkout</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>*</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {CartProducts.map((product) => {
                    return(
                        <tr className='cart-product' key={product.id}>
                            <td><img src={`/assets/multimedia/${product.image}`} alt="" /></td>
                            <td>{product.title}</td>                  
                            <td>$ {product.price}</td>
                            <td>{product.contador} </td>
                            <td><span>${parseInt(product.price) * parseInt(product.contador)}</span></td>
                            <td><DeleteIcon onClick={() => deleteProduct(product)}/></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <button>FINALIZAR COMPRA</button>
        <button onClick={() => clear()}>BORRAR TODO</button>
        </>
    )
}

export default Cart