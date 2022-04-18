//  Importações do Bootstrap
import { Button, Col, Container, Form, FormControl, Stack, Row } from 'react-bootstrap';

//  Importação de Componentes
import CardProduto from '../../components/ProdutoCard';
import { Link } from 'react-router-dom';
import { API } from '../../components/BancoDeDados';

const teste = { nome: "Nome do produto" };

//  TODO: Substituir o array abaixo pelo banco de dados
const produtos = Array(3).fill(teste);

const Lista = (props) => {

  const [produtos, setProdutos] = API()
  console.log(produtos)
  return <>
    <main>
      <Container>
        <Row>
          <Stack direction="horizontal" gap={2}>
            {/* <Button  variant="primary" type="button">Cadastrar produto</Button> */}
            <Link to='/'>Cadastrar produto</Link>


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
