const express = require('express');
const app = express();
const morgan = require('morgan');

//They query routes
const charactersRoute = require('./api/routes/characters');
const fruitsRoute = require('./api/routes/fruits');

//This used for show live queries
app.use(morgan('dev'));

//This for chacters, fruits etc. query
app.use('/characters', charactersRoute);
app.use('/fruits', fruitsRoute);

//This for 404 not found error
app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

//This for handling all errors and messages
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;