import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/Navbar.js'
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <div>
        {/* <ItemListContainer section="Productos de temporada"/> */}
        <ItemDetailContainer/>
      </div>     
    </div>
  );
}

export default App;
