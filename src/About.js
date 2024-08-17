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
import "./About.css";
import { FaGraduationCap } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import AboutPic from "./Images/AboutPic.jpg";
import { Link } from 'react-router-dom';

const About = () => {
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
            <span className="firstLineAbout">Get a Moment to Know</span> <br />
            <span className="secondLineAbout">About Me</span>
          </h2>
        </Row>
        <Row className="BottomAbout">
          <Row>
            <Col md={3} className="leftColAbout">
              <Image
                src={AboutPic}
                alt="Selected"
                className="picture"
                rounded
                style={{ width: '300px', height: '400px' }}
              />
            </Col>
            <Col md={9} className="rightColAbout">
              <Row>
                <Col md={4}>
                  <Card className="aboutCards text-center">
                    <Card.Body>
                      <MdSunny size={36} />
                      <Card.Title>Based in</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Orlando, FL</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="aboutCards">
                    <Card.Body>
                      <FaCheckCircle size={36} />
                      <Card.Title>GPA</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">3.95</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="aboutCards">
                    <Card.Body>
                      <FaGraduationCap size={36} />
                      <Card.Title>Graduation</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Fall 2024</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="infoRow">
                <p className="aboutMeInfo">
                  Hello! I’m Diego Armando La Rosa Giraud, a senior undergraduate student at the University of Central Florida, majoring in Computer Science. With a strong passion for full-stack application development, game development, and algorithm design, I am excited to transition into the professional world after my graduation in December 2024.
                </p>
                <p className="aboutMeInfo">
                    Throughout my projects, I have adapted these key principles:                  
                  <ul>
                    <li>Break tasks into smaller sub-problems and then combine the solutions to create a cohesive whole.</li>
                    <li>Clean code is better than smart complex code.</li>
                    <li>In team projects, communicate effectively and be the team player that the team needs to succeed.</li>
                    <li>Making mistakes is a natural part of the learning process, but failing to learn from those mistakes is not acceptable.</li>
                  </ul>
                </p>
                <p className="aboutMeInfo">
                  In my free time, I like to keep honing my programming skills by working on side projects such as video games and full-stack applications. When I am not coding, I usually spend my time playing video games, playing guitar, or learning Japanese.
                </p>
                <p className="aboutMeInfo">
                  As I prepare to graduate, I am excited to start my career in software engineering. I am eager to work in dynamic environments where I can contribute to innovative projects and continue to grow my technical skills. Feel free to reach out to me via email or LinkedIn.
                </p>
              </Row>
            </Col>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default About;
