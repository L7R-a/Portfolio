import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Card,
} from "react-bootstrap";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Capstone = () => {
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
            <span className="firstLineAbout">Capstone</span> <br />
            <span className="secondLineAbout">Network Visualization Analysis</span><br />
          </h2>
        </Row>
        <Row className="BottomAbout">
          <Row className="justify-content-md-center">
            <Card className="capstoneCardDescription">
              <Card.Body>
                <Card.Title className="text-center">The Story</Card.Title>
                <Row className="scrollable-row">
                <p> My capstone project involves collaborating with a team to develop a software for the Department of History at UCF. The software will provide a visual representation of relationships among individuals in early modern America.</p>
                            <br></br>
                            <p>The department has a database containing over 3,000 letters. Our team's objective is to create a software solution that extracts data from this database and generates a graph/network representation of the connections between individuals as revealed by the letters, where the graph's nodes are the individuals and the edges are the letters in most cases. In addition to the graph we also need to display the sidecars, statistics, and timelines of the individuals and the letters.</p>
                            <p>The goal of this project is to facilitate the research of historians about the relationships that these individuals had with one another by showing these connections and the information that the department have of them in one software.</p>

                            <br></br>
                            <p>We are currently in the development phase. The software is scheduled for completion by November 8th.</p>
                </Row>
              </Card.Body>
            </Card>

          </Row>

        </Row>
      </Row>
    </Container>
  );
};

export default Capstone;
