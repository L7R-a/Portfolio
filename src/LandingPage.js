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
  import "./LandingPage.css";
  import { FaGithub } from "react-icons/fa";
  import { FaLinkedin } from "react-icons/fa";
  import Formal from "./Images/Picture1.png"
const LandingPage = () => {

  const goToContact = async () => {
    window.location.href = '/Contact';

  }
    return(

    <Container fluid className="main-container">
        <Row>
          <Navbar id="myNavbar" bg="light" expand="lg" className="w-100">
            <Navbar.Brand className="brand-margin py-0">
              Diego La Rosa Giraud
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="right-nav">
              <Nav>
              <Nav.Link href="/portfolio">Home</Nav.Link>

                <Nav.Link href="/About">About Me</Nav.Link>
                <Nav.Link href="/Experience">Experience</Nav.Link>
                <Nav.Link href="/Projects">Projects</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Row className = "justify-content-md-center" style={{ height: "100%" }}>
            <Col md ={6} className = "LeftCol">
                <Row className="RightRow">
                    <Image
                        src={Formal}
                        alt="Selected"
                        className="picture"
                        rounded
                    />
                </Row>
            </Col>
            <Col md = {6}>
              <Row className="RightRow">
                <h2 className="rightText">
                  <span className="firstLine">Hi, my name is</span> <br />
                  Diego La Rosa Giraud <br />
                  <span className="lastLine">Computer Science Student</span>
                  <Col>
                    <Button type="button" className="landingButton" background size="lg" onClick={goToContact}>Contact info</Button>
                  </Col>
                  <a href="https://github.com/L7R-a" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="landingIcon" size={48} />
                  </a>

                  <a href="https://www.linkedin.com/in/diego-la-rosa-684665291/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="landingIcon" size={48} />
                  </a>
                </h2>
                
              </Row>

            </Col>
        </Row>
    </Container>
    );

};

export default LandingPage