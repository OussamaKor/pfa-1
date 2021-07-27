
import { Container, Navbar,Nav } from "react-bootstrap"
import "./navbar.css"

export default function Index() {
    return (
        <Navbar className='bgNav' collapseOnSelect expand="lg"  variant="dark">
        <Container>
        <Navbar.Brand href="/ahmed" className="font1">iDrive Gears</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link  href="#deets"className="font">Emploi</Nav.Link>
            <Nav.Link  eventKey={2} href="/tests" className="font">Cours</Nav.Link>
            <Nav.Link  eventKey={3} href="#deets"className="font">Exercices</Nav.Link>
            <Nav.Link  eventKey={4} href="#memes"className="font">Se déconnecter</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
