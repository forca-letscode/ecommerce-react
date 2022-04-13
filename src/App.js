import logo from './logo.svg';
import './App.css';
// blibioteca adicionais
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Form, Stack } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

function App() {

  const cadastro = [{
    id: 1,
    titulo: 'Nome',
    preco: 0,
    inf: 'inf',
    peso: 0
  }]

  return (
    <>
      <header>
        <Container>
          <Stack direction="horizontal">
            <div className="bg-light border">LOGO</div>
          </Stack>
        </Container>
      </header>


      <body>
        <div className="App">
          <Container>
            <p>Pesquisa</p>
          </Container>
        </div>

        <div>
          <Container>
            <Form>
              <fieldset>
                <Row>
                
                    <Col xs={4}>
                      <Row>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="titulo">Titulo:</Form.Label>
                            <Form.Control id="titulo" placeholder="Nome do produto" />
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="preco">Preço:</Form.Label>
                            <Form.Control type="number" id="preco" placeholder="Preço do produto" />
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="inf">Informações/Descrição:</Form.Label>
                            <Form.Control id="inf" placeholder="Informação do produto" />
                        </Form.Group>
                      </Row>
                    
                      <Row>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="peso">Peso:</Form.Label>
                            <Form.Control type="number" id="peso" placeholder="Peso do produto" />
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
                    <Button variant="primary" size="sm">
                      Small button
                    </Button>{' '}
                    <Button variant="secondary" size="sm">
                      Small button
                    </Button>
                  </div>
                </Row>
              </fieldset>
              
            </Form>
          </Container>
        </div>
      </body>
      

      <footer className="App">
        <Container>
          <p>Roda pé</p>
        </Container>
      </footer>
    </>
  );
}

export default App;
