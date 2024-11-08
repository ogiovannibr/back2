const express = require('express');
const app = express();

// Definir cabeçalhos CORS manualmente
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://front-five-ashen.vercel.app/');  // Altere para o domínio do seu front-end
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/endpoint', (req, res) => {
  res.json({ message: 'Olá do back-end!' });
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});

app.use(cors({
    origin: 'https://front-five-ashen.vercel.app/',
    credentials: true
  }));