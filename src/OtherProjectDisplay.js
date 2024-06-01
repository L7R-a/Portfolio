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
  import { FaGithub } from "react-icons/fa";


const OtherProjectDisplay = ({title, subtitle, githubLink, storyText, challenges, learningText,}) => {
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
              <span className="firstLineAbout">{title}</span> <br />
              <span className="secondLineAbout">{subtitle}</span><br />
                
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="landingIcon" size={48} />
                </a>
            </h2>
          </Row>
          <Row className = "BottomAbout">
            <Row>
              <Col md={4} >
                <Card className="projectCardDescription">
                  <Card.Body>
                    <Card.Title className="text-center">The Story</Card.Title>
                        <Row className="scrollable-row">
                        {storyText.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                        </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="projectCardDescription ">
                  <Card.Body>
                    <Card.Title className="text-center">The Challenges & Solutions</Card.Title>
                    <Row className="scrollable-row">
                        {challenges.map((item, index) => (                      
                        <ul>
                        <strong>Challenge:</strong> {item.challenge}
                        <br></br>
                        <br></br>
                        <strong>Solution:</strong> {item.solution}
                    </ul>
                    ))}
                    
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="projectCardDescription">
                  <Card.Body>
                    <Card.Title className="text-center">The Learning Outcome</Card.Title>
                    <Row className="scrollable-row">
                        {learningText.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                        </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Row>
        </Row>


    </Container>
    );

};

export default OtherProjectDisplay