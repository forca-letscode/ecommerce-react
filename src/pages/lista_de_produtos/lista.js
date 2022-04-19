//  Importações do Bootstrap
import { Button, Col, Container, Form, FormControl, Stack, Row } from 'react-bootstrap';

//  Importação de Componentes
import CardProduto from '../../components/ProdutoCard';
import { API } from '../../components/BancoDeDados';

//  Importações do React
import { useNavigate } from 'react-router-dom';

const Lista = (props) => {

  const [produtos, setProdutos] = API()
  const navigate = useNavigate()

  return <>
    <main>
      <Container>
        <Row>
          <Stack direction="horizontal" gap={2}>
            <Button variant="primary" type="button" onClick={() => navigate("/")}>Cadastrar produto</Button>

            <Form className="d-flex" >
              <FormControl
                type="search"
                placeholder="Pesquisa"
                className="me-2"
                aria-label="Search"
              />
              <Button type="submit" variant="outline-light"><img src="https://img.icons8.com/pastel-glyph/25/000000/search--v3.png" alt='Pesquisar'/></Button>
            </Form>
          </Stack>
        </Row>
      </Container>
      
      <div style={{marginTop: '2em'}}>
        <Container>
          <Row xs={2} md="auto" className="g-4">
            {produtos.map( produto => (
              <Col>{CardProduto(produto)}</Col>
            ))}
          </Row>
        </Container>
      </div>
    </main>
  </>
}

export default Lista;
