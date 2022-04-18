//  Importações do Bootstrap
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';

//  Importações do React
import { useState } from "react";

//  Importações de Componentes
import { API } from '../../components/BancoDeDados';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Cadastro = (props) => {

  
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [inf, setInf] = useState("")
  const [peso, setPeso] = useState("")
  const [produtos, setProdutos] = API()
  const navigate = useNavigate()
  const {id} = useParams()
  console.log(id)
  
  const handlerSubmit = (event) => {
    event.preventDefault()
    console.log(produtos)
    const lista = {id:produtos.length + 1, nome, preco, inf, peso}
    setProdutos([...produtos, lista])
    console.log('Lista', lista);
    navigate('/Lista')
    console.log('Produto', produtos);
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
                  {/* <Link to='/Lista'>Salvar</Link> */}
                  &emsp;
                  {/* <Button  variant="secondary" type='reset'>Cancelar</Button> */}
                  <Link to='/Lista'>Cancelar</Link>
                </div>
              </Row>
            </fieldset>
            
          </Form>
        </Container>
      </div>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome:</th>
              <th>Preço</th>
              <th>Informação</th>
              <th>Peso</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produt) => (
            <tr key = {produt.id}>
              <td>{produt.id}</td>
              <td>{produt.nome}</td>
              <td>{produt.preco}</td>
              <td>{produt.inf}</td>
              <td>{produt.peso}</td>
            </tr>))}
          </tbody>
        </Table>
      </div>

    </main>

    
  </>
}

export default Cadastro;
