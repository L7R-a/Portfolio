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
import TankP from "./Images/TankPic.png";
import OnlineP from "./Images/onlinepic.png";
import GameJamP from "./Images/gameJamPic.png";
import RPGP from "./Images/RPGGamePic.png";
import FirstGameP from "./Images/FirstgamePic.png";
import SinglePlayerP from "./Images/singlePlayerPic.png";
import VRP from "./Images/VRP.png";

const GameProjects = () => {
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
            <span className="secondLineAbout">Game Projects</span>
          </h2>
        </Row>
        <Row className="BottomAbout">
          <Row className="mb-3">
            <Col>
              <Link to="/OnlineMultiplayer" className="no-underline">
                <Card className="projectCard text-center">
                  <Card.Img className="imageProject" variant="top" src={OnlineP} />
                  <Card.Body>
                    <Card.Title>Online Multiplayer</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unreal Engine)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/SinglePlayerShooter" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={SinglePlayerP} />
                  <Card.Body>
                    <Card.Title>Single Player Shooter</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unreal Engine)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/Tanks" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={TankP} />
                  <Card.Body>
                    <Card.Title>Tanks Game</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unreal Engine)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
          <Row className="mt-3 paddingRow">
            <Col>
              <Link to="/WordGame" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={FirstGameP} />
                  <Card.Body>
                    <Card.Title>Word Game</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unreal Engine)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/RPG" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={RPGP} />
                  <Card.Body>
                    <Card.Title>RPG by Turns</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unity)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/GameJam" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={GameJamP} />
                  <Card.Body>
                    <Card.Title>Game Jam Game</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unity)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
          <Row className="mt-3 paddingRow">
            <Col md={4}>
              <Link to="/VRProjects" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={VRP} />
                  <Card.Body>
                    <Card.Title>VR Project</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unity)</Card.Subtitle>
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

export default GameProjects;
