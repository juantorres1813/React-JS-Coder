import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

const NavBar = () => {
    return(
        <div className='navbar-principal'>
        <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container>
            <Navbar.Brand href="#home">
            <img alt="" src="./assets/multimedia/logo.jpg" width="200" height="100" className="d-inline-block align-top"/>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ul className='ul-menu'>
                            <li><button>Volver al Menú</button></li>
                            <li><button>Catálogo</button></li>
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