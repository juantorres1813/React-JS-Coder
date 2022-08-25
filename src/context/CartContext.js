import {createContext, useState} from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {    
    const [CartProducts, setCartProducts] = useState([])

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    const clear = () => {
        setCartProducts([])
    }

    const addToCart = (product) => {
        setTotalProducts(totalProducts + 1)
        setTotalPrice(totalPrice + product.price)
        const isProductInCart = CartProducts.find(
            (productInCart) => productInCart.id === product.id,
        );
        if (isProductInCart) {
            const newArray = CartProducts.map((productInCart) => {
                if (productInCart.id === product.id) {
                return {
                    ...productInCart,
                    count: productInCart.contador + product.contador,
                };
                } else {
                return productInCart;
                }
        });
        setCartProducts(newArray);
        } else {
            setCartProducts([...CartProducts, product]);
        }
    };


    const deleteProduct = (product) => {
        setCartProducts(CartProducts.filter( (cartProduct) => cartProduct.id !== product.id) )
    }

    const info = {
        CartProducts,
        setCartProducts,
        clear,
        addToCart,
        deleteProduct,
        totalProducts,
        totalPrice,
    }

    return (
    <CartContext.Provider value={info}>
        {children}
    </CartContext.Provider>
    )  
}   

export default CartProvider