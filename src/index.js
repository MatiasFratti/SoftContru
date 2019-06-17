const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const cors = require('cors');
//initialized
const app = express();

// conections to database
const mongoose = require('./database/database');

// settings
app.set('port', process.env.PORT || 3080);

// middlewares
app.use(express.json());
app.use(cors());
// routes
app.use('/api', routes);

// static files
app.use(express.static(path.join(__dirname,'public')));
// server init

app.listen(app.get('port'),()=>{
    console.log('Servidor encendido en puerto', app.get('port'));
});