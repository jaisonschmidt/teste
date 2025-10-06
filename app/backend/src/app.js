const express = require('express');
const cors = require('cors');
const produtosRouter = require('./routes/produtos');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors({
  origin: 'https://shiny-palm-tree-xrj47r56wg6fvvq7-3001.app.github.dev',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());
app.use('/produtos', produtosRouter);

// Middleware de tratamento de erros
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});