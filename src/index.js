import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import App from './App';
import ProdutoProvider from '../src/compomente/Cadastro';
import { createRoot } from 'react-dom/client';

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';


//Rota
const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <ProdutoProvider>
    
        <Routes>

          <Route path="/" element={<App />} /> 

        </Routes>
      
    </ProdutoProvider>
  </BrowserRouter>
);
