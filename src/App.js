import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/Navbar.js';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import Catalogo from './pages/Catalogo';
import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
      <CartProvider>
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/item/:id' element={<DetailPage/>}/>
          <Route path='/item/*' element={<h1>ERROR - El Producto seleccionado no existe</h1>}/>
          <Route path='/cart' element={<Checkout/>}/>
          <Route path='categorias/:category' element={<Catalogo/>}/>
          <Route path='*' element={<h1>ERROR 404 - Página no encontrada</h1>}/>  
        </Routes>    
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
