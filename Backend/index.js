const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect ("mongodb+srv://Sironi:sironi@cluster0-d9v6j.mongodb.net/week10?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de paramentros:

//query params: request.query (Filtros, ordenaçao, ...)
//route params: request.params (indentificar um recurso na alteraçao ou remoçao)
//Body: request.body (dados para criaçao ou alteraçao de um registro)

// MongoDB (Nao-relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: "Hello Word"});
});

app.listen(3333);
