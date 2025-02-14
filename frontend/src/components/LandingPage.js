import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">MentorConnect</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#mentor">Mentor</Nav.Link>
              <Nav.Link href="#booking">Booking</Nav.Link>
              <Nav.Link href="#videochat">Video Chat</Nav.Link>
              <Nav.Link href="#howitworks">How It Works</Nav.Link>
              <Nav.Link href="#signup">Sign Up</Nav.Link>
              <Nav.Link href="#login">Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default LandingPage;
