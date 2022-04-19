//  Importações do Bootstrap
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

//  Importação do React
import { useNavigate, useParams } from 'react-router-dom';

//  Importações de Componentes
import { API } from '../../components/BancoDeDados';


const Visualiza = (props) => {
  const navigate = useNavigate()
  const [produtos, setProdutos] = API()
  const {id} = useParams()

  const produto = produtos.find(o => o.id == id)

  return <>
    <main>
      <div>
        <Container>
          <Form>
            <fieldset disabled>
              <Row >
              <h1>Detalhamento</h1>
                <Col xs={4}>
                  <Row>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="nome">Nome:</Form.Label>
                      <Form.Control value={produto.nome}/>
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="preco">Preço:</Form.Label>
                      <Form.Control value={produto.preco}/>
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="inf">Descrição:</Form.Label>
                      <Form.Control value={produto.inf} as="textarea"/>
                    </Form.Group>
                  </Row>
                
                  <Row>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="peso">Peso:</Form.Label>
                      <Form.Control value={produto.peso}/>
                    </Form.Group>
                  </Row>
                </Col>
                
                <Col xs={6}>
                  <Row>
                    Foto
                  </Row>
                </Col>
                
              </Row>
            </fieldset>
            <fieldset>
              <Row>
                <div className="Cadastro">
                  <Button  variant="primary" type='reset' onClick={() => navigate("/lista")}>Voltar</Button>
                </div>
              </Row>
            </fieldset>

          </Form>
        </Container>
      </div>
    </main>
  </>
}
  
export default Visualiza;
