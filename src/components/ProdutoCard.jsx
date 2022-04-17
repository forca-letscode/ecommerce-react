//  Importações do Bootstrap
import { Button, Card } from 'react-bootstrap';

export default function CriarCardProduto(produto) {

    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://img.icons8.com/ios-glyphs/240/000000/react.png" alt="Imagem do produto"/>
            <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Button type='submit' variant="success" size='sm'>Editar</Button>
                <Button type='button' variant="outline-danger" className='float-end' size='sm'>Excluir</Button>
            </Card.Body>
        </Card>
    </>
}
