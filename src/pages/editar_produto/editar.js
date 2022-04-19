//  Importações do Bootstrap
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

//  Importações do React
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

//  Importações de Componentes
import { API } from '../../components/BancoDeDados';

const Editar = (props) => {

  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [inf, setInf] = useState("")
  const [peso, setPeso] = useState("")
  const [produtos, setProdutos] = API()
  const navigate = useNavigate()
  const {id} = useParams()

  const editar_produto = produtos.find(o => o.id == id)
  
  const handlerSubmit = (event) => {
    event.preventDefault()
    
    const lista = {id:produtos.length + 1, nome, preco, inf, peso}
    setProdutos([...produtos, lista])
    navigate('/Lista')
  }

  return <>
    <main>
      <div>
        <Container>
          <Form onSubmit={handlerSubmit}>
            <fieldset>
              <Row >
              
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
                      <Form.Control placeholder="Informação do produto" onChange={event => setInf(event.target.value)} as="textarea" rows={3}/>
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
                  <Button  variant="primary" type="submit">Salvar</Button>
                  &emsp;
                  <Button  variant="secondary" type='reset' onClick={() => navigate("/lista")}>Cancelar</Button>
                </div>
              </Row>
            </fieldset>
            
          </Form>
        </Container>
      </div>
    </main>
  </>
}

export default Editar;
