//  Importações do Bootstrap
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

//  Importação do React
import { Link, useNavigate } from 'react-router-dom';

import { API } from '../components/BancoDeDados';


export default function CriarCardProduto(produto) {
    let navigate = useNavigate();
    const [produtos, setProdutos] = API()
    

    // Cria novo Array em "idfiltrado" porem não permite atualização ex:"setProdutos([...produtos, idfiltrado])"
    function DeletarId(id) {
        console.log(id)
        const idfiltrado = produtos.filter(obj => obj.id !== id)
        console.log(idfiltrado)
        console.log(produtos)
        //setProdutos([...produtos, idfiltrado])
    }

    
    return <>
        <Card key={produto.id} style={{ width: '18rem' }}>
            <Link to={`/visualizacao/${produto.id}`}>
                <Card.Img variant="top" src="https://img.icons8.com/ios-glyphs/240/000000/react.png" alt="Imagem do produto"/>
            </Link>
            <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Preço:&emsp;{produto.nome}</Card.Subtitle>
                <Button type='submit' onClick={() => navigate(`/editar/${produto.id}`)} variant="success" size='sm'>Editar</Button>
                <Button type='button' onClick={() => DeletarId(produto.id)} variant="outline-danger" className='float-end' size='sm'>Excluir</Button>
            </Card.Body>
        </Card>
    </>
}
