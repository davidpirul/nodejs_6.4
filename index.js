const route = require('./routes/indexRoutes');
const express = require('express');
var cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors());
app.use(route);


app.listen(3000, console.log("¡Servidor encendido!"))