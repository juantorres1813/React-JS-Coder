import {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../Modal/Modal';
import db from '../../firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';


const Cart = () => {

    const {CartProducts ,deleteProduct, clear, totalPrice} = useContext(CartContext)

    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState()

    const [order, setOrder] = useState({
        items: CartProducts.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalPrice 
    })
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email:''
    })



    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("order para enviar: ", {...order, buyer: formData})
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log('ORDEN GENERADA', orderDoc)
    }

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
                        placeholder='Ingrese el nombre'
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <input 
                        type='number' 
                        name='phone' 
                        placeholder='Ingrese el telefono' 
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Ingrese el mail'
                        value={formData.email}
                        onChange={handleChange}

                    />
                    <button type="submit">Enviar</button>
                </form>
            )}
        </Modal>
    }
        </>
    )
}

export default Cart