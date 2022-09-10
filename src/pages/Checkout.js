import Cart from "../components/Cart/Cart"
import {useContext} from 'react'
import { CartContext } from "../context/CartContext"
import {Link} from 'react-router-dom';
import '../components/Cart/Cart.css'


const Checkout = () => {
    const {CartProducts} = useContext(CartContext)
    return (
    <div>
        {CartProducts.length !== 0 ? <Cart/> : <div><h3>No Tienes Items en el Carrito</h3><Link to="/"><button className="boton-volver">Volver al Inicio</button></Link></div>}
    </div>
    )
}

export default Checkout