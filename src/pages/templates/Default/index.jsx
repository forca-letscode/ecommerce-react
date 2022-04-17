//  Importações do Bootstrap
import { Navbar, Nav, Row, Col, Image } from "react-bootstrap";

import { Link } from 'react-router-dom';

//  Importações de Estilos
import './index.css';

//  Importações do React
import React from "react";

export const CabecalhoRodape = (props) => {

  return <>
    <header>
      <Row>
        <Col>
          <h1>E-Store</h1>
        </Col>
        <Col>
          <p>Bem-vindo(a)</p>
          {/* <Link href="">Entre ou cadastra-se</Link> */}
        </Col>
      </Row>
      <Row>
        <Navbar>
          <Nav className="md-auto">
            <Nav.Link href="">Início</Nav.Link>
            <Nav.Link href="lista">Lista de Produtos</Nav.Link>
            <Nav.Link href="/">Cadastrar Produto</Nav.Link>
            <Nav.Link href="">Fale Conosco</Nav.Link>
          </Nav>
        </Navbar>
      </Row>
    </header>

    <main>{props.children}</main>

    <footer>
      <Row>
        <Col>
          <Navbar>
            <Nav>
              <Nav.Link href="">Trabalhe conosco</Nav.Link>
              <Nav.Link href="">Termos e condições</Nav.Link>
              <Nav.Link href="">Como cuidamos da sua privacidade</Nav.Link>
              <Nav.Link href="">Contato</Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col>
          <p>All Rights Reserved</p>
        </Col>

      </Row>
      <Row>
        <Col>
          {/* <img height="20px" src="icons8-endereço-50.png" /> */}
          {/* <img src="/icons8-endereço-50.png" alt="..." /> */}
          {/* <a href="https://icons8.com/icon/ngwSALX7bAP3/endereço">Endereço icon by Icons8</a> */}
          Endereço
        </Col>
        <Col>
          <p>
            {/* <Figure.Image width={171} height={180} alt="171x180" src="img/icone-telefone.png" /> */}
            Telefone
          </p>
        </Col>
        <Col>
          <p>
            {/* <Figure.Image width={171} height={180} alt="171x180" src="../../img/icone-email.png" /> */}
            E-mail
          </p>
        </Col>
      </Row>
      {/* <Row>
       <p>All Rights Reserved</p>
      </Row> */}
    </footer>
  </>
}