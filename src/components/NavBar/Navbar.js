import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className='navbar-principal'>
        <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container>
            <Navbar.Brand>
            <Link to="/"><img alt="" src="/assets/multimedia/logo.jpg"className="d-inline-block align-top navimg"/></Link>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ul className='ul-menu'>
                            <Link to="/"><li><button>Home</button></li></Link>
                            <Link to="/catalogo"><li><button>Catálogo</button></li></Link>
                            <Link to="/categorias/bolsosybandoleras"><li><button>Bolsos y Bandoleras</button></li></Link>
                            <Link to="/categorias/cartucheras"><li><button>Cartucheras</button></li></Link>
                            <Link to="/categorias/portacelulares"><li><button>Portacelulares</button></li></Link>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <CartWidget/>
        </div>
    )
}

export default NavBar