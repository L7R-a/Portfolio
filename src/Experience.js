import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import "./About.css";
import "./Experience.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

const Experience = () => {
  const data = [
    {
      programmingLanguages: "C++",
      developmentTools: "Bootstrap",
      roleExperience: "Frontend Engineer (1 year)",
      academicCourses: "Data Structures and Algorithms I & II",
    },
    {
      programmingLanguages: "C",
      developmentTools: "React.js",
      roleExperience: "Full Stack Developer (0.5 years)",
      academicCourses: "Object Oriented Programming",
    },
    {
      programmingLanguages: "Java",
      developmentTools: "Express.js",
      roleExperience: "Game Developer (3 years)",
      academicCourses: "AI for Game Development",
    },
    {
      programmingLanguages: "JavaScript",
      developmentTools: "Mocha",
      roleExperience: "Project Manager (1 year)",
      academicCourses: "Web Development",
    },
    {
      programmingLanguages: "Python",
      developmentTools: "Jest",
      roleExperience: "",
      academicCourses: "Virtual Reality Engineering",
    },
    {
      programmingLanguages: "C#",
      developmentTools: "GitHub",
      roleExperience: "",
      academicCourses: "Security in Computing",
    },
    {
      programmingLanguages: "HTML",
      developmentTools: "Microsoft Azure",
      roleExperience: "",
      academicCourses: "System Software",
    },
    {
      programmingLanguages: "CSS",
      developmentTools: "MySQL",
      roleExperience: "",
      academicCourses: "Senior Design",
    },
    {
      programmingLanguages: "SQL",
      developmentTools: "Unreal Engine",
      roleExperience: "",
      academicCourses: "Algorithms For Machine Learning",
    },
    {
      programmingLanguages: "",
      developmentTools: "Unity",
      roleExperience: "",
      academicCourses: "Robot Vision",
    },
    {
      programmingLanguages: "",
      developmentTools: "Visual Studio Code",
      roleExperience: "",
      academicCourses: "Mobile Device Software Development",
    },
  ];

  return (
    <Container fluid className="main-container">
      <Row>
        <Navbar id="myNavbar" bg="light" expand="lg" className="w-100">
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
      <Row className="justify-content-md-center mt-4">
        <span className="firstLineAbout text-center">Take a Look at</span> <br />
        <h2 className="text-center mb-4">My Experience</h2>
        <Row>
          <Col md={12} style={{ padding: "0 15%"}}>
            <DataTable showGridlines value={data} responsiveLayout="scroll"  size="large"  style={{ width: "100%", border: "3px solid #e0e0e0", borderRadius: "10px"  }} className="p-datatable-sm">
              <Column field="roleExperience" header="Role Experience" bodyStyle={{ textAlign: 'center' }} alignHeader={"center"}></Column>
              <Column field="programmingLanguages" header="Programming Languages"  bodyStyle={{ textAlign: 'center' }}  alignHeader={"center"}          ></Column>
              <Column field="developmentTools" header="Development Tools" bodyStyle={{ textAlign: 'center' }}     alignHeader={"center"}              ></Column>
              <Column field="academicCourses" header="Academic Coursework" bodyStyle={{ textAlign: 'center' }} alignHeader={"center"}></Column>
            </DataTable>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Experience;