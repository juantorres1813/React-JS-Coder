import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/Navbar.js';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import Catalogo from './pages/Catalogo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/catalogo/:id' element={<DetailPage/>}/>
          <Route path='/catalogo' element={<Catalogo/>}/>
          <Route path='*' element={<h1>ERROR 404 - Página no encontrada</h1>}/>  
        </Routes>    
      </BrowserRouter>
    </>
  );
}

export default App;
