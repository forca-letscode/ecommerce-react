//  Importações do Bootstrap
import { Container, Stack, Card } from "react-bootstrap";

//  Importações do React
import React from "react";

export const CabecalhoRodape = (props) => {

    return <>
        <header>
        <Container fluid="md">
          <Stack direction="horizontal" gap={2}>
            <div className="bg-light border">LOGO</div>
            <div className="bg-light border">E-Store</div>
          </Stack>
        </Container>
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
}
