//  Importações do Bootstrap
import { Container, Button } from 'react-bootstrap';

const Visualiza = (props) => {

    return <>
      <main>
        <div className="Visualiza">
            <Container>
                <p>Página de visualização de produto [em elaboração]</p>
                <Button href='/' variant="primary" type="submit">Página de cadastro</Button>
                <Button href='lista' variant="primary" type="submit">Página de listagem</Button>
            </Container>       
        </div>
      </main>
    </>
}
  
  export default Visualiza;