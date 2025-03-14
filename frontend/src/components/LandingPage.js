import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">MentorConnect</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/mentor">Mentor</Nav.Link>
              <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
              <Nav.Link href="#videochat">Video Chat</Nav.Link>
              <Nav.Link href="#howitworks">How It Works</Nav.Link>
              <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default LandingPage;
