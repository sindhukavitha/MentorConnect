import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MentorList from "./MenteeDashboard"; // Component for mentors

const LandingPage = () => {
  const [showBooking, setShowBooking] = useState(false);
  const navigate = useNavigate(); // For navigation

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">MentorConnect</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link href="#about">About us</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#review">Review</Nav.Link>
              <Button variant="outline-primary" onClick={() => navigate("/MentorMenteeCard")}>
                Log In
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Booking Button */}
      <Container className="mt-4 text-center">
        <Button variant="primary" onClick={() => setShowBooking(!showBooking)}>
          {showBooking ? "Hide Booking" : "Book a Mentor"}
        </Button>
      </Container>

      {/* Show Mentor List when Booking is Clicked */}
      {showBooking && (
        <Container className="mt-4">
          <MentorList />
        </Container>
      )}
    </>
  );
};

export default LandingPage;
