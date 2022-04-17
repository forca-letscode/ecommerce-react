//  Importações do Bootstrap
import { Navbar, Nav, Row } from "react-bootstrap";

//  Importações de Estilos
import './index.css';

//  Importações do React
import React from "react";

export const CabecalhoRodape = (props) => {

  return <>
    <header>
      <Row>
        <h1>E-Store</h1>
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
        <p>Contato</p>
        {/* <ul> */}
          <li>Endereço</li>
          <li>Telefone</li>
          <li>E-mail</li>
        {/* </ul> */}
        <p>All Rights Reserved</p>
      </Row>
    </footer>
  </>
}
