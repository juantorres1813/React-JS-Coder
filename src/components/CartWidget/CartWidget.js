import {useState , useContext} from 'react';
import Menu from '@mui/material/Menu';
import { CartContext } from '../../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import './CartWidget.css'

const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const {CartProducts ,deleteProduct, totalProducts, clear } = useContext(CartContext)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
    <div className='cart-widget'>
        {CartProducts.length !== 0 && <p>{totalProducts}</p>}
            <ShoppingCartIcon 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='menu-cart'>
                {CartProducts.map((product) => {
                    return(
                        <div className='item-cart-product' key={product.id}>
                            <img src={`/assets/multimedia/${product.image}`} alt="" />
                            <div className='details'>
                                <p>{product.title}</p>
                                <p>Cantidad: {product.contador} </p>
                                <span>${parseInt(product.price) * parseInt(product.contador)}</span>
                            </div>
                            <div className='cart-delete' >
                                <DeleteIcon onClick={() => deleteProduct(product)}/>
                            </div>
                        </div>
                    )
                })}
                <div class="total">Total: ${CartProducts.map((product) => {
                            return product.price * product.contador 
                        }).reduce((a, b) => a + b, 0)}</div>
                <div className='btn-all'><button onClick={() => clear()} className={"btn-delete-all"}>Borrar todo</button></div>
                </div>
            </Menu>
                    </div>
                )
            }

export default CartWidget