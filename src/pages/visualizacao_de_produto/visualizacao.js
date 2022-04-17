//  Importações do Bootstrap
import { Container, Form, Row, Col } from 'react-bootstrap';

const Visualiza = (props) => {

    return <>
      <main>
        <div className="Visualiza">
          <Container>
            <Form>
              <fieldset>
                <Row>

                  <Col xs={6}>
                    <Row>
                      <Form.Label htmlFor="nome">Nome</Form.Label>
                      <p>FOTO</p>
                    </Row>
                  </Col>
                
                  <Col xs={4}>
                    <Row>
                      <Form.Label htmlFor="preco">Preço</Form.Label>
                    </Row>

                    <Row>
                      <Form.Label htmlFor="inf">Informações/Descrição</Form.Label>
                    </Row>
                  
                    <Row>
                      <Form.Label htmlFor="peso">Peso</Form.Label>
                    </Row>

                  </Col>
                </Row>
              </fieldset>
            </Form>
          </Container>
        </div>
      </main>
    </>
}
  
export default Visualiza;