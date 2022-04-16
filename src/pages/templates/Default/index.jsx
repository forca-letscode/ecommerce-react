//  Importações do Bootstrap
import { Col, Row } from "react-bootstrap";

//  Importações de Estilos
import './index.css';

//  Importações do React
import React from "react";

export const CabecalhoRodape = (props) => {

  return <>
    <header>
      <Row>
        <h1>E-Store</h1>
        <Col>Início</Col>
        <Col>Sobre</Col>
        <Col>Fale Conosco</Col>
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
