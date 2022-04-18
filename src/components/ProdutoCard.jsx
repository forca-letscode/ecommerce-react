//  Importações do Bootstrap
import { Button, Card } from 'react-bootstrap';

//  Importação do React
import { Link, useNavigate } from 'react-router-dom';

export default function CriarCardProduto(produto) {
    let navigate = useNavigate();
    return <>
        <Card key={produto.id} style={{ width: '18rem' }}>
            <Link to={`/visualizacao/${produto.id}`}>
                <Card.Img variant="top" src="https://img.icons8.com/ios-glyphs/240/000000/react.png" alt="Imagem do produto"/>
            </Link>
            <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Button type='submit' onClick={() => navigate(`/${produto.id}`)} variant="success" size='sm'>Editar</Button>
                <Button type='button' variant="outline-danger" className='float-end' size='sm'>Excluir</Button>
            </Card.Body>
        </Card>
    </>
}
