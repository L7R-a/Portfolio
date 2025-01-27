import React from "react";
import { Navbar, Nav, Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Projects.css";
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import MERNP from "./Images/VVPic.png";
import LAMPP from "./Images/WebPic.png";
import ThisWebP from "./Images/ThisWebPic.png";
import CapstoneP from "./Images/CapstoneP.png";
import GuitarP from "./Images/GuitarP.png";
import OnlineP from "./Images/onlinepic.png";
import GameJamP from "./Images/gameJamPic.png";
import RPGP from "./Images/RPGGamePic.png";
import FirstGameP from "./Images/FirstgamePic.png";
import SinglePlayerP from "./Images/singlePlayerPic.png";
import VRP from "./Images/VRP.png";
import TankP from "./Images/TankPic.png";
import GraphP from "./Images/RailroadsPic.png";
import PalP from "./Images/PalPic.png";
import ScheduleP from "./Images/SchedulesPic.png";
import VMP from "./Images/VMPic.png";
import BKP from "./Images/MazePic.png";
import { SiUnrealengine } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { RiStackFill } from "react-icons/ri";

const Projects = () => {
  const webProjects = [
    {
      name: "Network Analysis",
      image: CapstoneP, // Replace with your image path
      role: "Frontend Developer",
      link: "portfolio#/Capstone",
      icon: <FaReact />
    },
    {
      name: "Guitar Enthusiast",
      image: GuitarP, // Replace with your image path
      role: "Full-stack Developer",
      link: "portfolio#/GuitarEnthusiast",
      icon: <RiStackFill />
    },
    {
      name: "Virtual Closet",
      image: MERNP, // Replace with your image path
      role: "Full-stack Developer",
      link: "portfolio#/VirtualVogue",
      icon: <RiStackFill />
    },
    {
      name: "PantryPal",
      image: PalP, // Replace with your image path
      role: "Frontend Developer",
      link: "portfolio#/PantryPal",
      icon: <FaReact/>
    },
    {
      name: "Contact Manager",
      image: LAMPP, // Replace with your image path
      role: "Frontend Developer",
      link: "portfolio#/ContactManager",
      icon: <TiHtml5 />
    },
    {
      name: "Portfolio",
      image: ThisWebP, // Replace with your image path
      role: "Frontend Developer",
      link: "portfolio#/PortfolioApp",
      icon: <FaReact />
    },
   
  ];

  const gameProjects = [
      {
        name: "Blaster",
        image: OnlineP, // Replace with your image path
        role: "Unreal Engine Developer",
        link: "portfolio#/OnlineMultiplayer",
        icon: <SiUnrealengine />
      },
      {
        name: "Magic Gears",
        image: RPGP, // Replace with your image path
        role: "Unity Developer",
        link: "portfolio#/RPG",
        icon: <FaUnity />
      },
      {
        name: "Sun Striker",
        image: GameJamP, // Replace with your image path
        role: "Unity Developer",
        link: "portfolio#/GameJam",
        icon: <FaUnity />
      },
      {
        name: "Virtual Reality",
        image: VRP, // Replace with your image path
        role: "VR Developer",
        link: "portfolio#/VRProjects",
        icon: <FaUnity />
      },
      {
        name: "Belica",
        image: SinglePlayerP, // Replace with your image path
        role: "Unreal Engine Developer",
        link: "portfolio#/SinglePlayerShooter",
        icon: <SiUnrealengine />
      },
      {
        name: "Tanks",
        image: TankP, // Replace with your image path
        role: "Unreal Engine Developer",
        link: "portfolio#/Tanks",
        icon: <SiUnrealengine />
      },
      {
        name: "Bulls Cows",
        image: FirstGameP, // Replace with your image path
        role: "Unreal Engine Developer",
        link: "portfolio#/WordGame",
        icon: <SiUnrealengine />
      }
  ];

  const otherProjects = [
    {
      name: "College Schedule Management System",
      image: ScheduleP, 
      role: "Java Developer",
      link: "portfolio#/Schedules",
      icon: <FaJava />
    },
    {
      name: "Kruskal Algorithm",
      image: GraphP,
      role: "Java Developer",
      link: "portfolio#/GraphProblem",
      icon: <FaJava />
    },
    {
      name: "Backtracking Algorithm",
      image: BKP,
      role: "Java Developer",
      link: "portfolio#/Backtracking",
      icon: <FaJava />
    },
    {
      name: "Tiny Harvard Virtual Machine",
      image: VMP, 
      role: "C Developer",
      link: "portfolio#/VM",
      icon: <FaMicrochip />
    }
  ];

  const itemTemplate = (data) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"            
            src={data.image} 
            alt={data.name}
          />
          <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
            <div className="flex flex-column align-items-center lg:align-items-start gap-3">
              <div className="flex flex-column gap-1">
                <div className="text-2xl font-bold text-900">{data.name}</div>
                <div className="text-700">{data.description}</div>
              </div>
              <div className="flex flex-column gap-2">
  <span className="flex align-items-center gap-2">
    {data.icon && (
      <span className="icon">
        {React.cloneElement(data.icon, { size: "1.5em" })} {/* Adjust size here */}
      </span>
    )}
    <span className="font-semibold">{data.role}</span>
  </span>
</div>
            </div>
            <div className="flex flex-column align-items-center lg:align-items-end gap-4">
              <Button label="View Project" onClick={() => window.location.href = data.link}  className="projectButton"></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };




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
            <span className="secondLineAbout">Projects</span>
          </h2>
        </Row>
        <Row className="BottomAbout">
          <Row>
            <Col>
                <DataScroller value={webProjects} itemTemplate={itemTemplate} rows={6} inline scrollHeight="650px" buffer={0.4} header="Web Applications" />
            </Col>
            <Col>
                <DataScroller value={gameProjects} itemTemplate={itemTemplate} rows={7} inline scrollHeight="650px" buffer={0.4} header="Videogames" />
            </Col>
            <Col>
                <DataScroller value={otherProjects} itemTemplate={itemTemplate} rows={4} inline scrollHeight="650px" buffer={0.4} header="Other Projects" />
            </Col>
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default Projects;
