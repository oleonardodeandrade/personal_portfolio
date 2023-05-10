import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import metaversol from "../../Assets/Projects/metaversol.png";
import neverknight from "../../Assets/Projects/neverknight.png";
import tribo from "../../Assets/Projects/tribo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Trabalhos </strong> recentes
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metaversol}
              isBlog={false}
              title="Metaversol"
              description="Um sistema feito para uma empresa canadense com o objetivo de vender itens no Metaverso"
              demoLink="https://metaversolwebsite.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neverknight}
              isBlog={false}
              title="NeverKnight"
              description="Um jogo desenvolvido para a criação de portfólio para uma agência canadense"
              demoLink="https://neverknight.netlify.app/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tribo}
              isBlog={false}
              title="Tribo da Sorte"
              description="Plataforma de apostas baseada na API das Lotericas da Caixa Economica Federal"
              demoLink="https://tribodasorteonline.com.br/#/jogos"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
