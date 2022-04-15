//  Importações do Bootstrap
import { Container, Stack } from "react-bootstrap";

//  Importações do React
import React from "react";

export const CabecalhoRodape = (props) => {

    return <>
        <header>
        <Container>
          <Stack direction="horizontal">
            <div className="bg-light border">LOGO</div>
          </Stack>
        </Container>
      </header>

      <main>{props.children}</main>

      <footer>
        <Container>
          <p>Roda pé</p>
        </Container>
      </footer>
    </>
}
