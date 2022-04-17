//  Importações do Bootstrap
import { Col, Row, Stack } from "react-bootstrap";

//  Importações de Estilos
import './index.css';

//  Importações do React
import React from "react";

export const CabecalhoRodape = (props) => {

  return <>
    <header>
      <Stack direction="horizontal">
        <Row>
          <h1>E-Store</h1>
          <Col md="auto">Início</Col>
          <Col md="auto">Lista de Produtos</Col>
          <Col md="auto">Cadastrar Produto</Col>
          <Col md="auto">Sobre</Col>
          <Col md="auto">Fale Conosco</Col>
        </Row>
      </Stack>
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
