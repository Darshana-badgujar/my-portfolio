

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website to showcase my skills and projects using React, Node.js, and MySQL.',
    link: 'https://github.com/Darshana-badgujar/my-portfolio',
  },
  {
    title: 'ToDo App',
    description: 'A CRUD ToDo application with login system and database integration.',
    link: 'https://github.com/Darshana-badgujar/To-Do-List',
  },
  {
    title: 'Login Page',
    description: 'A Login Page  using the HTML,CSS,JS.',
    link: 'https://github.com/Darshana-badgujar/DarshanaLoginPage',
  },
];

const Projects = () => {
  return (
    <Container className="projects-section">
      <h2 className="text-center">💼 My Projects</h2>
      <Row className="g-4">
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="project-card h-100">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button href={project.link} target="_blank">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
