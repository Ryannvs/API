//Importar o módulo do Express
const express = require('express');

//Criar uma aplicação Express
const app = express();

//Definir a porta em que o servidor irá escutar 
const porta = 8000;

//Definir a rota de Teste de API
app.get('/', (req, res) => {
    res.send("API de Usuários está funcionando");
})

//Iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em  http://localhost:${porta}`);
})
