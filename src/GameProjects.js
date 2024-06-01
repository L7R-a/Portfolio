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
  import TankP from "./Images/TankPic.png";
  import OnlineP from "./Images/onlinepic.png";
  import GameJamP from "./Images/gameJamPic.png";
  import RPGP from "./Images/RPGGamePic.png";
  import FirstGameP from "./Images/FirstgamePic.png";
  import SinglePlayerP from "./Images/singlePlayerPic.png";
  import VRP from "./Images/VRP.png";

const GameProjects = () => {
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
              <span className="secondLineAbout">Game Projects</span>
            </h2>
          </Row>
          <Row className = "BottomAbout">
            <Row className="mb-3">
              <Col>
              <a href="/OnlineMultiplayer" rel="noopener noreferrer" className="no-underline">
                <Card className="projectCard text-center">
                  <Card.Img className="imageProject" variant="top" src={OnlineP} />
                  <Card.Body>
                    <Card.Title>Online Multiplayer</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unreal Engine)</Card.Subtitle>
                  </Card.Body>
                </Card>
              </a>
              </Col>
              <Col>

              <a href="/SinglePlayerShooter" rel="noopener noreferrer" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={SinglePlayerP} />
                  <Card.Body>
                    <Card.Title>Single Player Shooter</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unreal Engine)</Card.Subtitle>
                  </Card.Body>
                </Card>
                </a>
              </Col>
              <Col>
              <a href="/Tanks" rel="noopener noreferrer" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={TankP} />
                  <Card.Body>
                    <Card.Title>Tanks Game</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unreal Engine)</Card.Subtitle>
                  </Card.Body>
                </Card>
                  </a>
              </Col>
            </Row>
            <Row className="mt-3 paddingRow">
              <Col>
              <a href="/WordGame" rel="noopener noreferrer" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={FirstGameP} />
                  <Card.Body>
                    <Card.Title>Word Game</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unreal Engine)</Card.Subtitle>
                  </Card.Body>
                </Card>
                </a>
              </Col>
              <Col>
              <a href="/RPG" rel="noopener noreferrer" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={RPGP} />
                  <Card.Body>
                    <Card.Title>RPG by Turns</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unity)</Card.Subtitle>
                  </Card.Body>
                </Card>
                  </a>
              </Col>
              <Col>
              <a href="/GameJam" rel="noopener noreferrer" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={GameJamP} />
                  <Card.Body>
                    <Card.Title>Game Jam Game</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unity)</Card.Subtitle>
                  </Card.Body>
                </Card>
                  </a>
              </Col>
            </Row>
            <Row className="mt-3 paddingRow">
              <Col md={4}>
              <a href="/VRProjects" rel="noopener noreferrer" className="no-underline">
                <Card className="projectCard">
                  <Card.Img className="imageProject" variant="top" src={VRP} />
                  <Card.Body>
                    <Card.Title>VR Project</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">(Unity)</Card.Subtitle>
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

export default GameProjects