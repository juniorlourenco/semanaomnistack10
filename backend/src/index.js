const express = require ('express');
const mongoose = require ('mongoose')
const routes = require ('./routes');

const app = express ();
mongoose.connect('mongodb+srv://juniorlourenco:fuckuguy8@cluster0-nqouv.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});


app.use (express.json());
app.use (routes);
// metodos HTTP: get, post, put, delete

//Tipos de parâmetros:

//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para a criação ou alteração de um registro)

//MongoDB (Não-relacional)

app.listen(3333);