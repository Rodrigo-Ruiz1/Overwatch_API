'use strict'

const http = require('http');
const hostname = '127.0.0.1';
const port = 3333;

const cors = require('cors');

const express = require('express');;
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.static('public'));

app.use(cors());


const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at: http://${hostname}:${port}`);
})

const rootController = require('./routes/index');
const heroesController = require('./routes/heroes');
const rolesController = require('./routes/roles');
const abilitiesController = require('./routes/abilities');

app.use('/api/v1', rootController);
app.use('/api/v1/heroes', heroesController);
app.use('/api/v1/roles', rolesController);
app.use('/api/v1/abilities', abilitiesController);