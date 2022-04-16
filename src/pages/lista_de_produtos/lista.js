//  Importações do Bootstrap
import { Button, Col, Container, Form, FormControl, Row, Stack } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

//  Importações do React
import { useState } from "react";

//  Importações de Componentes
import { API } from '../../components/BancoDeDados';


const Lista = (props) => {

  // const [id, setId] = useState("")
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [inf, setInf] = useState("")
  const [peso, setPeso] = useState("")
  const [produtos, setProdutos] = API()


  return <>
    <main>
      <div className="Lista">
        <Container>
          <Stack direction="horizontal" gap={2}>
            {/* <Link className="col-md-6" to="../cadastro_de_produto/cadastro">Cadastrar produto</Link> */}
            <Button href='/' variant="primary" type="submit">Cadastrar produto</Button>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Pesquisa"
                className="me-2"
                aria-label="Pesquisa"
              />
              <Button variant="outline-success">Pesquisa</Button>
            </Form>
          </Stack>
        </Container>        
      </div>

    </main>
  </>
}

export default Lista;
