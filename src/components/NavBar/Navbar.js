import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return(
        <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container>
            <Navbar.Brand href="#home">
            <img alt="" src="./assets/multimedia/logo.jpg" width="200" height="100" className="d-inline-block align-top"/>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Volver al Menú</Nav.Link>
                        <Nav.Link href="#catalogo">Catalogo</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar