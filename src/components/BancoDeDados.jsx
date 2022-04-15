import React, { createContext, useState, useContext } from "react";

//  Criação do Banco de Dados "BD"
const BD = createContext();

//  Função utilizada para tornar o BD visível em todas as Páginas
//  É importada no src/index.js e adicionada ao Render
export default function BancoDeDados({ children }) {
  const [produtos, setProdutos] = useState([]);

  return (
    <BD.Provider value={{ produtos, setProdutos }}>
      {children}
    </BD.Provider>
  );
}

//  Função utilizada para manipular o BD
export const API = () => {
  const { produtos, setProdutos } = useContext(BD);
  return [produtos, setProdutos];
}
