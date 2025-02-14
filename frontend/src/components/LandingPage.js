import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CalendarDemo } from "./CalendarDemo"; // Ensure correct import path
import MentorForm from "./MentorForm"; // Import MentorForm
import MentorList from "./MentorList"; // Import MentorList

const LandingPage = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMentor, setShowMentor] = useState(false); // State for Mentor section

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
              <Nav.Link onClick={() => setShowMentor(!showMentor)}>Mentor</Nav.Link>
              <Nav.Link onClick={() => setShowCalendar(!showCalendar)}>Booking</Nav.Link>
              <Nav.Link href="#videochat">Video Chat</Nav.Link>
              <Nav.Link href="#howitworks">How It Works</Nav.Link>
              <Nav.Link href="#signup">Sign Up</Nav.Link>
              <Nav.Link href="#login">Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Show Calendar when 'Booking' is clicked */}
      {showCalendar && <CalendarDemo />}

      {/* Show MentorForm and MentorList when 'Mentor' is clicked */}
      {showMentor && (
        <div>
          <MentorForm />
          <MentorList />
        </div>
      )}
    </>
  );
};

export default LandingPage; 