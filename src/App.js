import logo from './logo.svg';
import './App.css';
// blibioteca adicionais
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Form, Stack } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { API, useProdutos } from '../src/compomente/Cadastro';


const ProdutoEdit = (props) => {
    /* const [codigo, setCodigo] = useState("") */
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [inf, setInf] = useState("")
    const [peso, setPeso] = useState("")
    const [produtos, setProdutos] = API()

  // Aqui pegamos o parametro. Observe que o nome da propriedade é o mesmo da definidada na rota.
  let { id } = useParams();


  const handlerSubmit = (event) => {
    event.preventDefault()
    console.log(nome)
    console.log(preco)
    console.log(inf)
    console.log(peso)

    setProdutos([{
      /* codigo, */
      nome,
      preco,
      inf,
      peso
    }])
  }

  return (
    <>
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
                      <img src={logo} className="App-logo" alt="logo" />
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
                    <Button variant="primary" type='reset'>
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
  );
}

export default ProdutoEdit;
