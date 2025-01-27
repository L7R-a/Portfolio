import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";
import "./Projects.css";
import { FaBug } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";


const ProjectDisplay = ({
  title,
  subtitle,
  videoSrc,
  githubLink,
  downloadLink,
  websiteLink,
  storyText,
  challenges,
  learningText,
  showGitHubButton = true,
  showKnownBugs = false,
  knownBugs,
}) => {
  const [activeIndex, setActiveIndex] = useState(0); // Track active tab index

  const handleTabChange = (e) => {
    // Handle custom behavior for specific tabs
    if (e.index === 4 && githubLink) {
      window.open(githubLink, "_blank", "noopener,noreferrer");
    } else if (e.index === 5 && downloadLink) {
      window.open(downloadLink, "_blank", "noopener,noreferrer");
    } else if (e.index === 6 && websiteLink) {
      window.open(websiteLink, "_blank", "noopener,noreferrer");
    } else {
      setActiveIndex(e.index); // Update active tab index for other tabs
    }
  };

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
            <Row className="mb-8 justify-content-center videoRow">
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
          </Col>
          <Col md={6} className="scrollable-column">
            <TabView activeIndex={activeIndex} onTabChange={handleTabChange} scrollable>
              <TabPanel header="Story"  rightIcon="pi pi-book ml-2">
                {storyText.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </TabPanel>
              <TabPanel header="Learning Outcome" rightIcon="pi pi-check-circle ml-2">
                {learningText.map((item, index) => (
                  <div key={index} className="mb-3">
                    <strong>{item.title}</strong>
                    <ul>
                      {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </TabPanel>
              {challenges && (
                <TabPanel header="Challenges & Solutions" rightIcon="pi pi-exclamation-circle ml-2">
                  {challenges.map((item, index) => (
                    <div key={index} className="mb-3">
                      <strong>{item.title}</strong>
                      <ul>
                        <li>
                          <strong>Challenge:</strong> {item.challenge}
                        </li>
                        <li>
                          <strong>Solution:</strong> {item.solution}
                        </li>
                      </ul>
                    </div>
                  ))}
                </TabPanel>
              )}
              {showKnownBugs && (
                <TabPanel header="Known Bugs" rightIcon={<FaBug className="ml-2" />}>
                  <ul>
                    {knownBugs.map((bug, index) => (
                      <li key={index}>{bug}</li>
                    ))}
                  </ul>
                </TabPanel>
              )}
              {githubLink && <TabPanel header="GitHub" rightIcon="pi pi-github ml-2"/>}
              {downloadLink && <TabPanel header="Download" rightIcon="pi pi-arrow-circle-down ml-2" />}
              {websiteLink && <TabPanel header="Website" rightIcon={<MdOutlineWeb  className="ml-2" />}/>}
            </TabView>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ProjectDisplay;
