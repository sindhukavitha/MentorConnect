import { Container, Row, Col } from "react-bootstrap";
import { CalendarDemo } from "./CalendarDemo";
import LandingPage from "./LandingPage";

const CalendarPage = () => {
  return (
    <div>
      <LandingPage />
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <CalendarDemo />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CalendarPage;
