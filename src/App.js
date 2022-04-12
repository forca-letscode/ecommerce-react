import logo from './logo.svg';
import './App.css';
// blibioteca adicionais
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Form, Stack } from 'react-bootstrap';

function App() {
  return (
    <>
      <header>
      <Stack direction="horizontal">
        <div className="bg-light border">LOGO</div>
      </Stack>
      </header>
      <body>
        <div>
        <p>Corpo</p>
        </div>
        <div>
          <Container>
          <Form>
            <fieldset disabled>
              <Row>
              <Col xs={3}>
                <Row>
                  <Form.Group className="mb-3">
                      <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
                      <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                  </Form.Group>
                </Row>
                <Row>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                    <Form.Select id="disabledSelect">
                      <option>Disabled select</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3">
                      <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
                      <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                  </Form.Group>
                </Row>
                <Row>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                    <Form.Select id="disabledSelect">
                      <option>Disabled select</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Col>
              <Col xs={3}>
              <Row>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                    <Form.Select id="disabledSelect">
                      <option>Disabled select</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Col>
              </Row>
              <Row>
                <div>
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
      
      <footer>
      <p>Roda pé</p>
      </footer>
    </>
  );
}

export default App;
