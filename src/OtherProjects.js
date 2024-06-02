import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Projects.css";
import GraphP from "./Images/GraphPic.png";
import ScheduleP from "./Images/SchedulesPic.png";
import VMP from "./Images/VMPic.png";

const OtherProjects = () => {
  return (
    <Container fluid className="main-container">
      <Row>
        <Navbar id="myNavbar" bg="light" expand="lg" className="w-100">
          <Nav>
          </Nav>
          <Navbar.Brand as={Link} to="/" className="brand-margin py-0">
            Diego La Rosa Giraud
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="right-nav">
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About Me</Nav.Link>
              <Nav.Link as={Link} to="/Experience">Experience</Nav.Link>
              <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
      <Row className="justify-content-md-center" style={{ height: "100%" }}>
        <Row className="TopAbout">
          <h2 className="TopText">
            <span className="firstLineAbout">These Are My </span> <br />
            <span className="secondLineAbout">Computer Science Fundamentals</span>
          </h2>
        </Row>
        <Row className="BottomAbout">
          <Row>
            <Col>
              <Link to="/GraphProblem" className="no-underline">
                <Card className="projectCard text-center">
                  <Card.Img className="imageProject" variant="top" src={GraphP} />
                  <Card.Body>
                    <Card.Title>Graph Problem</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Applying Kruskal Algorithm)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/Schedules" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={ScheduleP} />
                  <Card.Body>
                    <Card.Title>Schedules</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Applying OOP Principles)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/VM" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={VMP} />
                  <Card.Body>
                    <Card.Title>Tiny Virtual Machine</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Virtual Simulation of The Harvard Architecture)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default OtherProjects;
