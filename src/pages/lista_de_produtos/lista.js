//  Importações do Bootstrap
import { Button, Form, FormControl, Stack, Row, Card } from 'react-bootstrap';

// import { Link } from 'react-router-dom';


const Lista = (props) => {

  return <>
    <main>
      <div className="Lista">
        <Row>
          <Stack direction="horizontal" gap={2}>
            <Button href='/' variant="primary" type="submit">Cadastrar produto</Button>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Pesquisa"
                className="me-2"
                aria-label="Pesquisa"
              />
              <Button type="submit" variant="outline-light">&#128269;</Button>
            </Form>
          </Stack>
        </Row> 

        <Row>
          <Button href='visualizacao' variant="primary" type="submit">Visualizar produto</Button>
        </Row> 

        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Título</Card.Title>
            {/* colocar título como link p/ redirecionar p/ tela de visualização */}
            <Button href='/' variant="outline-primary" type="submit">Editar</Button>
            <Button variant="outline-dark" type="reset">Excluir</Button>
          </Card.Body>
        </Card>

      </div>

    </main>
  </>
}

export default Lista;
