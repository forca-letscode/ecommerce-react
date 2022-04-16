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
        <Container>
          <p>Roda pé</p>
          <h1>Contato</h1>
          <p>Endereço</p>
          <p>Telefone</p>
          <p>E-mail</p>
        </Container>
      </footer>
    </>
    <footer>
      <Row>
        <li>All Rights Reserved</li>
        <li>mais alguma outra informação que dê pra por no rodapé</li>
        <h1>Contato</h1>
        <p>Endereço</p>
        <p>Telefone</p>
        <p>E-mail</p>
      </Row>
    </footer>
  </>
}
