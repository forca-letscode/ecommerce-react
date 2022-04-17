//  Importações do Bootstrap
import { Navbar, Nav, Row, Col, Stack } from "react-bootstrap";

//  Importações de Estilos
import './index.css';

//  Importações do React
import React from "react";
import { Link } from 'react-router-dom';

export const CabecalhoRodape = (props) => {

  return <>
    <header>
      <Row>
        <Col md={10}>
          <h1>E-Store</h1>
        </Col>
        <Col md={2}>
          <p>Bem-vindo(a)</p>
          <Link to="">Entre ou cadastre-se</Link>
        </Col>
      </Row>
      <Row>
        <Navbar variant="dark">
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
          <Navbar variant="dark"> 
            <Nav className="md-auto">
              <Nav.Link href="">Trabalhe conosco</Nav.Link>
              <Nav.Link href="">Termos e condições</Nav.Link>
              <Nav.Link href="">Como cuidamos da sua privacidade</Nav.Link>
              <Nav.Link href="">Contato</Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col md={2}>
          <p>All Rights Reserved</p>
        </Col>

      </Row>
      <Row>
        <Stack direction="horizontal" gap={3}>
          <div>
            <img src="https://img.icons8.com/ios/25/ffffff/address--v1.png" alt="Endereço"/>
            &emsp;Endereço
          </div>
          <div>
            <img src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/25/ffffff/external-telephone-communication-nawicon-detailed-outline-nawicon.png" alt="Telefone"/>
            &emsp;Telefone
          </div>
          <div>
            <img src="https://img.icons8.com/ios/25/ffffff/new-post.png" alt="Email"/>
            &emsp;E-mail
          </div>
        </Stack>
      </Row>
    </footer>
  </>
}
