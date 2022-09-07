import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return(
        <div className='navbar-principal'>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container className='menu'>
                    <Navbar.Brand>
                        <Link to="/"><img alt="" src="/assets/multimedia/logo.jpg" className="d-inline-block align-top navimg"/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to={"/categorias/bolsosybandoleras"}>Bolsos y bandoleras</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/categorias/cartucheras"}>Cartucheras</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/categorias/portacelulares"}>Portacelulares</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <CartWidget/>
        </div>
    )
}

export default NavBar