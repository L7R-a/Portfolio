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
import LAMPP from "./Images/WebPic.png";
import MERNP from "./Images/VVPic.png";
import ThisWebP from "./Images/ThisWebPic.png";
import CapstoneP from "./Images/CapstoneP.png";
import GuitarP from "./Images/GuitarP.png";

const WebProjects = () => {
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
            <span className="secondLineAbout">Web Projects</span>
          </h2>
        </Row>
        <Row className="BottomAbout">
          <Row>

            <Col>
              <Link to="/ContactManager" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={LAMPP} />
                  <Card.Body>
                    <Card.Title>Contact Manager</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(LAMP stack application)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/VirtualVogue" className="no-underline">
                <Card className="projectCard text-center">
                  <Card.Img className="imageProject" variant="top" src={MERNP} />
                  <Card.Body>
                    <Card.Title>Virtual Vogue</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(MERN stack application)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/PortfolioApp" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={ThisWebP} />
                  <Card.Body>
                    <Card.Title>Website Portfolio</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Current website)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/Capstone" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={CapstoneP} />
                  <Card.Body>
                    <Card.Title>Network Visualization Analysis</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Capstone project)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/GuitarEnthusiast" className="no-underline">
                <Card className="projectCard text-center">
                  <Card.Img className="imageProject" variant="top" src={GuitarP} />
                  <Card.Body>
                    <Card.Title>Guitar Enthusiast</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Full-stack application)</Card.Subtitle>
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

export default WebProjects;
