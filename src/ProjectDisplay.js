import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { PiSealCheckFill } from "react-icons/pi";
import "./Projects.css";

const ProjectDisplay = ({ 
  title, 
  subtitle, 
  videoSrc, 
  githubLink, 
  downloadLink, 
  storyText, 
  challenges, 
  learningText,   
  showGitHubButton = true, 
  showKnownBugs = false, 
  knownBugs 
}) => {
  
  const goToGitHub = () => {
    window.open(githubLink, '_blank');
  }

  const goToDownload = () => {
    window.open(downloadLink, '_blank');
  }

  return (
    <Container fluid className="main-container">
      <Row>
        <Navbar id="myNavbar" bg="light" expand="lg" className="w-100">
          <Nav></Nav>
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
            <span className="firstLineAbout">{title} </span> <br />
            <span className="secondLineAbout">{subtitle}</span>
          </h2>
        </Row>
        <Row className="BottomAbout">
          <Col md={6}>
            <Row className="mb-3 justify-content-center videoRow">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src={videoSrc}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Row>
            <Row>
              <div className="d-flex justify-content-around">
                { downloadLink && (
                  <Button
                    type="button"
                    className="landingButton"
                    background="true"
                    size="lg"
                    onClick={goToDownload}
                  >
                    Download
                  </Button>
                )}
                {showGitHubButton && (
                  <Button 
                    type="button" 
                    className="landingButton" 
                    background="true" 
                    size="lg" 
                    onClick={goToGitHub}
                  >
                    GitHub
                  </Button>
                )}                
              </div>
            </Row>
          </Col>
          <Col md={6} className="scrollable-column">
            <Row className="mb-3 justify-content-center">
              <Card className="projectCardDescription">
                <Card.Body>
                  <Card.Title className="cardTitle">The Story</Card.Title>
                  <Row>
                    {storyText.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                 </Row>
                </Card.Body>
              </Card>
              <Card className="projectCardDescription">
                <Card.Body>
                  <Card.Title className="cardTitle">The Learning Outcome</Card.Title>
                  <Row>
                    <ListGroup className="list-group">
                      {learningText.map((item, index) => (
                        <ListGroup.Item key={index} className="list-group-item-no-border">
                          <Row>
                            <Col md={1}>
                              <PiSealCheckFill size={24} />
                            </Col>
                            <Col md={11}>
                              <strong>{item.title}</strong>
                              <ul>
                                {item.details.map((detail, idx) => (
                                  <li key={idx}>{detail}</li>
                                ))}
                              </ul>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Row>
                </Card.Body>
              </Card>
              {challenges && (
                <Card className="projectCardDescription">
                  <Card.Body>
                    <Card.Title className="cardTitle">The Challenges & Solutions</Card.Title>
                    <Row>
                      <ListGroup className="list-group">
                        {challenges.map((item, index) => (
                          <ListGroup.Item key={index} className="list-group-item-no-border">
                            <Row>
                              <Col md={1}>
                                <PiSealCheckFill size={24} />
                              </Col>
                              <Col md={11}>
                                <strong>{item.title}</strong>
                                <ul>
                                  <li>
                                    <strong>Challenge:</strong> {item.challenge}
                                  </li>
                                  <li>
                                    <strong>Solution:</strong> {item.solution}
                                  </li>
                                </ul>
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Row>
                  </Card.Body>
                </Card>
              )}
              {showKnownBugs && (
                <Card className="projectCardDescription">
                  <Card.Body>
                    <Card.Title className="cardTitle">Known Bugs</Card.Title>
                    <Row>
                      <ListGroup className="list-group">
                        {knownBugs.map((bug, index) => (
                          <ListGroup.Item key={index} className="list-group-item-no-border">
                            <Row>
                              <Col md={1}> {index + 1}.</Col>
                              <Col md={11}> {bug} </Col>
                            </Row> 
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Row>
                  </Card.Body>
                </Card>
              )}
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ProjectDisplay;
