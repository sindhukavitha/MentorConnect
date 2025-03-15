import { Container, Row, Col } from "react-bootstrap";
import MentorForm from "./MentorForm";
import LandingPage from "./LandingPage";

const MentorPage = () => {
  return (
    <div>
      <LandingPage />
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <MentorForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MentorPage;
