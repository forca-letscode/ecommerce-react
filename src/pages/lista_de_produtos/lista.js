//  Importações do Bootstrap
import { Button, Form, FormControl, Stack, Row } from 'react-bootstrap';

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
              <Button variant="outline-success">Pesquisa</Button>
            </Form>
          </Stack>
        </Row> 

        <Row>
          <Button href='visualizacao' variant="primary" type="submit">Visualizar produto</Button>
        </Row>       
      </div>

    </main>
  </>
}

export default Lista;
