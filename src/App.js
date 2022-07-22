import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/Navbar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <div>
        <ItemListContainer section="Productos de temporada"/>
      </div>     
    </div>
  );
}

export default App;
