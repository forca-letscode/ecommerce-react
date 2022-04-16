//  Importações do Bootstrap
import { Button, Col, Container, Form, FormControl, Row, Stack } from 'react-bootstrap';

import { Link } from 'react-router-dom';

//  Importações do React
import { useState } from "react";

//  Importações de Componentes
import { API } from '../../components/BancoDeDados';

// import { Lista } from '../lista_de_produtos/lista';


const Cadastro = (props) => {

  // const [id, setId] = useState("")
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [inf, setInf] = useState("")
  const [peso, setPeso] = useState("")
  const [produtos, setProdutos] = API()


  const handlerSubmit = (event) => {
    event.preventDefault()
    
    setProdutos([{
      // id,
      nome,
      preco,
      inf,
      peso
    }])

    console.log(produtos);
  }

  return <>
    <main>
      {/* <div className="Cadastro">
        {/* <Container>
          <p>Pesquisa</p>
        </Container> }
        <Stack direction="horizontal" gap={2}>
          <Button variant="primary" type="submit">Cadastrar produto</Button>
          <div className="bg-light border ms-auto">Pesquisa</div>
        </Stack>
      </div> */}
 
      <div className="Cadastro">
        <Container>
          <Stack direction="horizontal" gap={2}>
            <Link className="col-md-6" to="../lista_de_produtos/lista">Cadastrar produto</Link>
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

      <div>
        <Container>
          <Form onSubmit={handlerSubmit}>
            <fieldset>
              <Row>
              
                <Col xs={4}>
                  <Row>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="nome">Nome:</Form.Label>
                      <Form.Control placeholder="Nome do produto" onChange={event => setNome(event.target.value)}/>
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="preco">Preço:</Form.Label>
                      <Form.Control type="number" placeholder="Preço do produto" onChange={event => setPreco(event.target.value)}/>
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="inf">Informações/Descrição:</Form.Label>
                      <Form.Control placeholder="Informação do produto" onChange={event => setInf(event.target.value)}/>
                    </Form.Group>
                  </Row>
                
                  <Row>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="peso">Peso:</Form.Label>
                      <Form.Control type="number" placeholder="Peso do produto" onChange={event => setPeso(event.target.value)}/>
                    </Form.Group>
                  </Row>
                </Col>
                
                <Col xs={6}>
                  <Row>
                    Segunda Coluna
                  </Row>
                </Col>
                
              </Row>
            </fieldset>

            <fieldset>
              <Row>
                <div className="Cadastro">
                  <Button href='lista' variant="primary" type="submit">Salvar</Button>
                  &emsp;
                  {/* href='lista_de_produtos/lista */}
                  <Button variant="secondary" type='reset'>Cancelar</Button>
                </div>
              </Row>
            </fieldset>
            
          </Form>
        </Container>
      </div>
    </main>
  </>
}

export default Cadastro;
