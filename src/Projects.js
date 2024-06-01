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
  import WebP from "./Images/WebsiteP.png"
  import OtherP from "./Images/OtherP.png"
  import GameP from "./Images/GameP.png"
  import "./Projects.css";


const Projects = () => {
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
              <span className="secondLineAbout">Projects</span>
            </h2>
          </Row>
          <Row className = "BottomAbout">
            <Row>
              <Col>
              <a href="/GameProjects" rel="noopener noreferrer" className="no-underline">
                <Card className="projectCard text-center">
                  <Card.Img className="imageProject" variant="top" src={GameP} />
                  <Card.Body>
                    <Card.Title>Game Development</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Games made with Unreal Engine and Unity)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </a>
              </Col>
              <Col>
              <a href="/WebProjects" rel="noopener noreferrer" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={WebP} />
                  <Card.Body>
                    <Card.Title>Web Development</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(MERN and LAMP stack appliactions)</Card.Subtitle>
                  </Card.Body>
                </Card>
                </a>
              </Col>
              <Col>
              <a href="/OtherProjects" rel="noopener noreferrer" className="no-underline">
                <Card className="projectCard">
                <Card.Img className="imageProject" variant="top" src={OtherP} />
                  <Card.Body>
                    <Card.Title>Computer Science Fundamentals</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Algorithms, OOP, Computer Architecture)</Card.Subtitle>
                  </Card.Body>
                </Card>
                  </a>
              </Col>
            </Row>

          </Row>
          {/* <Row className = "BottomAbout">
            <Row>
              <Col>
              <a href="/GameProjects" rel="noopener noreferrer" className="no-underline d-flex align-items-center">
                <Card className="projectCard text-center">
                  <Card.Img className="imageProject" variant="top" src={GameP} />
                  <Card.Body>
                    <Card.Title>Game Development</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Games made with Unreal Engine and Unity)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </a>
              </Col>
              <Col>
              <a href="/WebProjects" rel="noopener noreferrer" className="no-underline d-flex align-items-center">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={WebP} />
                  <Card.Body>
                    <Card.Title>Web Development</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(MERN and LAMP stack appliactions)</Card.Subtitle>
                  </Card.Body>
                </Card>
                </a>
              </Col>
              <Col>
              <a href="/OtherProjects" rel="noopener noreferrer" className="no-underline d-flex align-items-center">
                <Card className="projectCard text-center">
                  <Card.Img className="imageProject" variant="top" src={OtherP} />
                  <Card.Body>
                    <Card.Title>Others</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Algorithms, OOP, Computer Architecture)</Card.Subtitle>
                  </Card.Body>
                </Card>
                </a>
              </Col>
            </Row>

          </Row> */}
        </Row>


    </Container>
    );

};

export default Projects