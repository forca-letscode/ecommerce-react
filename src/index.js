//  Importação do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//  Importação das bibliotecas React
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//  Importação das páginas
import Cadastro from './pages/cadastro_de_produto/cadastro';
import Lista from './pages/lista_de_produtos/lista';
import { CabecalhoRodape } from './pages/templates/Default/index';

//  Importação de Componentes
import BancoDeDados from './components/BancoDeDados';


//  Criação das Rotas para as Páginas
const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <BancoDeDados>
      <CabecalhoRodape>
    
        <Routes>

          <Route path="/" element={<Cadastro />} /> 
          {/* <Route path="/" element={<Lista />} />  */}
          <Route path="/lista" element={<Lista />} />

        </Routes>
        
      </CabecalhoRodape>
    </BancoDeDados>
  </BrowserRouter>
);
