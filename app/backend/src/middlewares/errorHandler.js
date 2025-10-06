function errorHandler(err, req, res, next) {
  res.status(500).json({
    error: {
      message: err.message || 'Erro interno do servidor',
      details: err.stack
    }
  });
}

module.exports = errorHandler;