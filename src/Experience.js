import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  ListGroup
} from "react-bootstrap";
import { PiSealCheckFill } from "react-icons/pi";
import { AiFillPlusSquare } from "react-icons/ai";
import "./About.css";
import "./Experience.css";
import { Link } from 'react-router-dom';

const Experience = () => {
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
            <span className="firstLineAbout">Take a Look at</span> <br />
            <span className="secondLineAbout">My Experience</span>
          </h2>
        </Row>
        <Row className="BottomAbout">
          <Row>
            <Col md={12} className="rightColAbout">
              <Row>
                <Col md={3}>
                  <Card className="experienceCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">Programming Languages</Card.Title>
                      <Row>
                        <Col md={6}>
                          <p className="cardTitle">Proficient</p>
                          <ListGroup className="list-group">
                            <ListGroup.Item className="list-group-item-no-border">
                              <PiSealCheckFill size={24} /> C++
                            </ListGroup.Item>
                            <ListGroup.Item className="list-group-item-no-border">
                              <PiSealCheckFill size={24} /> C
                            </ListGroup.Item>
                            <ListGroup.Item className="list-group-item-no-border">
                              <PiSealCheckFill size={24} /> Java
                            </ListGroup.Item>
                            <ListGroup.Item className="list-group-item-no-border">
                              <PiSealCheckFill size={24} /> JS
                            </ListGroup.Item>
                          </ListGroup>
                        </Col>
                        <Col md={6}>
                          <p className="cardTitle">Intermediate</p>
                          <ListGroup className="list-group">
                            <ListGroup.Item className="list-group-item-no-border">
                              <PiSealCheckFill size={24} /> C#
                            </ListGroup.Item>
                            <ListGroup.Item className="list-group-item-no-border">
                              <PiSealCheckFill size={24} /> HTML
                            </ListGroup.Item>
                            <ListGroup.Item className="list-group-item-no-border">
                              <PiSealCheckFill size={24} /> CSS
                            </ListGroup.Item>
                            <ListGroup.Item className="list-group-item-no-border">
                              <PiSealCheckFill size={24} /> SQL
                            </ListGroup.Item>
                          </ListGroup>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="experienceCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">Development Tools</Card.Title>
                      <Row>
                        <ListGroup className="list-group">
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> Bootstrap
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> React.js
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> Express.js
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> Mocha
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> Jest
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> GitHub
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> Microsoft Azure
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> MySQL
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> Unreal Engine
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> Unity
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> Visual Studio Code
                          </ListGroup.Item>
                        </ListGroup>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="experienceCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">Academic Courses</Card.Title>
                      <Row>
                        <ListGroup className="list-group">
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> Data Structures and Algorithms I & II
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> Object Oriented Programming
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> AI for Game Development
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> Web Development
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> Virtual Reality Engineering
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> Security in Computing
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <PiSealCheckFill size={24} /> System Software
                          </ListGroup.Item>
                        </ListGroup>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="experienceCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">Currently Working on</Card.Title>
                      <Row>
                        <ListGroup className="list-group">
                          <ListGroup.Item className="list-group-item-no-border">
                            <AiFillPlusSquare size={24} /> Python
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <AiFillPlusSquare size={24} /> AI & Machine Learning
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <AiFillPlusSquare size={24} /> Robotic Vision
                          </ListGroup.Item>
                          <ListGroup.Item className="list-group-item-no-border">
                            <AiFillPlusSquare size={24} /> Senior Design Project (Capstone)
                          </ListGroup.Item>
                        </ListGroup>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
              </Row>
            </Col>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default Experience;
