import React from "react";
import {
    Navbar,
    Nav,
    Container,
    Row,
    Col,
    Card,
    Button,
    Image,
  } from "react-bootstrap";
  import "./Projects.css";
  import GraphP from "./Images/GraphPic.png";
  import ScheduleP from "./Images/SchedulesPic.png";
  import VMP from "./Images/VMPic.png";

const OtherProjects = () => {
    return(

    <Container fluid className="main-container">
        <Row>
          <Navbar id="myNavbar" bg="light" expand="lg" className="w-100">
            <Nav>
            </Nav>
            <Navbar.Brand href="./" className="brand-margin py-0">
              Diego La Rosa Giraud
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="right-nav">
              <Nav>
              <Nav.Link href="/">Home</Nav.Link>

                <Nav.Link href="/About">About Me</Nav.Link>
                <Nav.Link href="/Experience">Experience</Nav.Link>
                <Nav.Link href="/Projects">Projects</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Row className = "justify-content-md-center" style={{ height: "100%" }}>
          <Row className = "TopAbout">
            <h2 className="TopText">
              <span className="firstLineAbout">These Are My </span> <br />
              <span className="secondLineAbout">Computer Science Fundamentals</span>
            </h2>
          </Row>
          <Row className = "BottomAbout">
            <Row>
              <Col>
              <a href="/GraphProblem" rel="noopener noreferrer" className="no-underline">
                <Card className="projectCard text-center">
                  <Card.Img className="imageProject" variant="top" src={GraphP} />
                  <Card.Body>
                    <Card.Title>Graph Problem</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Applying Kruskal Algorithm)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </a>
              </Col>
              <Col>
              <a href="/Schedules" rel="noopener noreferrer" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={ScheduleP} />
                  <Card.Body>
                    <Card.Title>Schedules</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Applying OOP Principles)</Card.Subtitle>
                  </Card.Body>
                </Card>
                </a>
              </Col>
              <Col>
              <a href="/VM" rel="noopener noreferrer" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={VMP} />
                  <Card.Body>
                    <Card.Title>Tiny Virtual Machine</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Virtual Simulation of The Hardvard Architecture)</Card.Subtitle>
                  </Card.Body>
                </Card>
                  </a>
              </Col>
            </Row>

          </Row>
        </Row>


    </Container>
    );

};

export default OtherProjects