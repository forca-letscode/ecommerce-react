//  Importações do Bootstrap
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';


//  Importações do React
import { useState } from "react";

//  Importações de Componentes
import { API } from '../../components/BancoDeDados';

const Cadastro = (props) => {
  

  function Adicionar (){
    id: document
  }

  
  /* Manupula o evento (faz tratamento de informações capturadas)*/
  const handlerSubmit = (event) => {
    /* "preventDefault()" Impedir que um link abra o URL por padrão, veja: (https://www.w3schools.com/jsref/event_preventdefault.asp)  */
    event.preventDefault()
    setId(id + 1)
    // Array contendo chave-valor dos "useState" de {id, nome, preco, inf, peso} enviados para função API
    const lista = {id, nome, preco, inf, peso};
    setProdutos([...produtos, lista])
    console.log(produtos);
  }

  return <>
    <main>
      <div>
        <Container>
          <p>Pesquisa</p>
        </Container>
      </div>

      
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Dados</label>
          <input type="text" id="id" placeholder="id" />
          <input type="text" id="nome" placeholder="nome" />
          <button> Adicionar </button>
        </div>
      

      <div>
        <hr/>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Informação</th>
              <th>Peso</th>
            </tr>
          </thead>
          <tbody>
              {produtos.map( (usuario) =>
                <tr key = {usuario.id}>
                  <td >{usuario.id}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.preco}</td>
                  <td>{usuario.inf}</td>
                  <td>{usuario.peso}</td>
                </tr>
              )}
            
          </tbody>
        </Table>
      </div>

    </main>
  </>
}

export default Cadastro;
