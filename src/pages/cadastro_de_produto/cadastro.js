//  Importações do Bootstrap
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';

//  Importações do React
import { useState } from "react";

//  Importações de Componentes
import { API } from '../../components/BancoDeDados';


const Cadastro = (props) => {

  const [id, setId] = useState("")
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [inf, setInf] = useState("")
  const [peso, setPeso] = useState("")
  const [produtos, setProdutos] = API()


  const handlerSubmit = (event) => {
    event.preventDefault()
    
    setProdutos([{
      id,
      nome,
      preco,
      inf,
      peso
    }])

    console.log(produtos);
  }

  return <>
      <header>
        <Container>
          <Stack direction="horizontal">
            <div className="bg-light border">LOGO</div>
          </Stack>
        </Container>
      </header>


      <main>
        <div className="App">
          <Container>
            <p>Pesquisa</p>
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
                  <div className="App">
                    <Button variant="primary" type="submit">
                      Salvar
                    </Button>{' '}
                    <Button variant="secondary" type='reset'>
                      Cancelar
                    </Button>
                  </div>
                </Row>
              </fieldset>
              
            </Form>
          </Container>
        </div>
      </main>
      

      <footer className="App">
        <Container>
          <p>Roda pé</p>
        </Container>
      </footer>
    </>
}

export default Cadastro;
