import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Olá a todos, eu sou <span className="purple">Leonardo Andrade </span>
            de <span className="purple"> Cedral-SP, Brasil.</span>
            <br />Sou um desenvolvedor a mais de 4 anos.
            <br />
            <br />
            Além da codificação, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar futebol
            </li>
            <li className="about-activity">
              <ImPointRight /> Escrever nas midias sociais
            </li>
            <li className="about-activity">
              <ImPointRight /> Passear com a família
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
