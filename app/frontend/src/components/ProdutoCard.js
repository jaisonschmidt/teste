import React from 'react';
import './ProdutoCard.css';

function ProdutoCard({ produto }) {
  return (
    <div className="produto-card">
      <h2>{produto.nome}</h2>
      <p><strong>Categoria:</strong> {produto.categoria}</p>
      <p><strong>Descrição:</strong> {produto.descricao}</p>
      <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
      <span className="produto-id">ID: {produto.id}</span>
    </div>
  );
}

export default ProdutoCard;
