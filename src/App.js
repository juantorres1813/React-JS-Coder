import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/Navbar.js';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import Catalogo from './pages/Catalogo';
import Category from './pages/Category';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/item/:id' element={<DetailPage/>}/>
          <Route path='/catalogo' element={<Catalogo/>}/>
          <Route path='/cart' element={<Checkout/>}/>
          <Route path='categorias/:category' element={<Category/>}/>
          <Route path='*' element={<h1>ERROR 404 - Página no encontrada</h1>}/>  
        </Routes>    
      </BrowserRouter>
    </>
  );
}

export default App;
