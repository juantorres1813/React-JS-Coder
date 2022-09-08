import {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../Modal/Modal';
import db from '../../firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';
import './Cart.css'


const Cart = () => {

    const {CartProducts ,deleteProduct, clear,} = useContext(CartContext)

    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState()

    const [order, setOrder] = useState({
        items: CartProducts.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: product.contador,
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: CartProducts.map((product) => {
            return product.price * product.contador 
        }).reduce((a, b) => a + b, 0)}
    )
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        email2: '',
    })



    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        // console.log("order para enviar: ", {...order, buyer: formData})
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        // console.log('ORDEN GENERADA', orderDoc)
    }

    return (
        <>
        <h1 className='checkout'>Checkout</h1>
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>*</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Sub total</th>
                    </tr>
                </thead>
                <tbody>
                    {CartProducts.map((product) => {
                    return(
                        <tr className='cart-product' key={product.id}>
                            <td><img src={`/assets/multimedia/${product.image}`} alt="" /></td>
                            <td>{product.title}</td>                  
                            <td>$ {product.price}</td>
                            <td>{parseInt(product.contador)} </td>
                            <td><span>${parseInt(product.price) * parseInt(product.contador)}</span></td>
                            <td><DeleteIcon onClick={() => deleteProduct(product)}/></td>
                        </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <td>Total</td>
                    <td>
                        <span>${CartProducts.map((product) => {
                            return product.price * product.contador 
                        }).reduce((a, b) => a + b, 0)} </span>
                    </td>
                </tfoot>
            </table>
        </div>
        <button onClick={() => setShowModal(true)}>FINALIZAR COMPRA</button>
        <button onClick={() => clear()}>BORRAR TODO</button>
        {showModal && 
            <Modal title="DATOS DE CONTACTO" close={() => setShowModal()}>
            {success ? (
                <>
                <h2>Su orden se genero correctamente</h2>
                <p>ID de compra : {success}</p>
                </>
            ) : (
                <form onSubmit={submitData}>
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='Ingrese nombre y apellido'
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <input 
                        type='number' 
                        name='phone' 
                        placeholder='Ingrese telefono' 
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Ingrese email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type='email' 
                        name='email2' 
                        placeholder='Valide el email'
                        value={formData.email2}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" disabled={
                        !formData.name ||
                        !formData.phone ||
                        !formData.email ||
                        !formData.email2 ||
                        CartProducts.length === 0 ||
                        !(formData.email === formData.email2)}>Enviar</button>
                </form>
            )}
        </Modal>
    }
        </>
    )
}

export default Cart