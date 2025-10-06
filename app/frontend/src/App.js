import './App.css';
import ProdutoCard from './components/ProdutoCard';
import { useEffect, useState } from 'react';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://shiny-palm-tree-xrj47r56wg6fvvq7-3000.app.github.dev/produtos')
      .then(res => {
        if (!res.ok) throw new Error('Erro ao buscar produtos');
        return res.json();
      })
      .then(data => {
        setProdutos(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{color: 'red'}}>Erro: {error}</p>}
      <div className="produtos-lista">
        {produtos.map(produto => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default App;
