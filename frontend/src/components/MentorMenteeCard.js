import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MentorMenteeCard = () => {
  const navigate = useNavigate();

  return (
    <div className="mentor-mentee-container">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="g-4">
          {/* Mentor Card - Redirect to Mentor Login */}
          <Col md={6}>
            <Card className="mentor-card" onClick={() => navigate("/login")}>
              <Card.Body>
                <h2 className="card-title">Mentor</h2>
              </Card.Body>
            </Card>
          </Col>

          {/* Mentee Card - Redirect to Mentee Login */}
          <Col md={6}>
          <Card className="mentee-card" onClick={() => {
  console.log("Navigating to Mentee Login");
  navigate("/mentee-login");
  <Card.Body>
                <h2 className="card-title">Mentee</h2>
              </Card.Body>
}}>
  <Card.Body>
                <h2 className="card-title">Mentee</h2>
              </Card.Body>
</Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MentorMenteeCard;
