import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
