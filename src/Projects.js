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
import WebP from "./Images/WebsiteP.png";
import OtherP from "./Images/OtherP.png";
import GameP from "./Images/GameP.png";
import "./Projects.css";

const Projects = () => {
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
            <span className="secondLineAbout">Projects</span>
          </h2>
        </Row>
        <Row className="BottomAbout">
          <Row>
            <Col>
              <Link to="/GameProjects" className="no-underline">
                <Card className="projectCard text-center">
                  <Card.Img className="imageProject" variant="top" src={GameP} />
                  <Card.Body>
                    <Card.Title>Game Development</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unreal Engine and Unity Games)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/WebProjects" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={WebP} />
                  <Card.Body>
                    <Card.Title>Web Development</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Full-stack Applications)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/OtherProjects" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={OtherP} />
                  <Card.Body>
                    <Card.Title>Computer Science Fundamentals</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Algorithms, OOP, Computer Architecture)</Card.Subtitle>
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

export default Projects;
