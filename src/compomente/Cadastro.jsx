import React, { createContext, useState, useContext } from "react";

const BancoDeDados = createContext();

export default function ProdutoProvider({ children }) {
  const [produtos, setProdutos] = useState([]);

  return (
    <BancoDeDados.Provider value={{ produtos, setProdutos }}>
      {children}
    </BancoDeDados.Provider>
  );
}

export const API = () => {
  const context = useContext(BancoDeDados)
  const { produtos, setProdutos } = context

  return [produtos, setProdutos]
}

