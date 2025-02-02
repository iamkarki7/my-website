import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import deli from "../assets/projects/deli.jpg";
import job from "../assets/projects/job.png";
import dm from "../assets/projects/dm.png";
import md from "../assets/projects/md.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deli}
              isBlog={false}
              title="Delivery Fee Calculator"
              description="The React Delivery Fee Calculator is a web application designed to calculate delivery fees based on different conditions such as rush hours and incorrect input validation. Built with Vite, Material UI, and Formik, this project features a React-based interface where users can input data and get fee calculations in real-time. It includes end-to-end tests with Cypress and unit tests using Vitest. The app is deployed via GitHub Actions, automating workflows for linting, testing, and deployment."
              ghLink="https://github.com/iamkarki7/React-Delivery-Fee-Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={md}
              isBlog={false}
              title="Dropshipping Platform"
              description="Mahabouddha Dropshipping is a comprehensive dropshipping platform designed to simplify e-commerce by connecting sellers with suppliers. It enables entrepreneurs to start their online stores without holding inventory, offering a seamless process for product sourcing, order fulfillment, and delivery. With an easy-to-use interface, Mahabouddha Dropshipping allows users to manage their business efficiently and scale quickly.."
              ghLink="https://github.com/iamkarki7/Mahabouddha-Dropshipping"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dm}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink="https://github.com/iamkarki7/Mahabouddha-Dropshipping"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Job Website"
              description="Jobify is a user-friendly job portal designed to connect job seekers with employers. It offers a seamless platform for posting job opportunities, browsing listings, and applying for positions. Jobify aims to simplify the recruitment process, helping both candidates and companies find the perfect match quickly and efficiently."
              ghLink="https://github.com/iamkarki7/Jobify"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects