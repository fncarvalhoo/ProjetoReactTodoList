import React from "react";

import { AreaHeader, Container } from "./styled.js";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <AreaHeader>
      <Container>
        <div className="logo">&lt;/FN&gt;</div>
        <nav>
          <ul>
            <li>
              <Link to="/Sobre">Início</Link>
            </li>
            <li>
              <Link to="/Projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/Certificados">Certificados</Link>
            </li>
            <li>
              <Link to="/Sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </AreaHeader>
  );
}
