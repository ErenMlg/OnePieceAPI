const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//They query routes
const charactersRoute = require('./api/routes/characters');
const devilFruitRoute = require('./api/routes/devilFruits');
const crewsRoute = require('./api/routes/crew');
const locationsRoute = require('./api/routes/location');
const sublocationsRoute = require('./api/routes/sublocation');
const occupationsRoute = require('./api/routes/occupation');

mongoose.connect('mongodb+srv://one-piece-api:monkey-d-luffy@one-piece.wredkcf.mongodb.net/OnePieceDB');

//This(morgan library) used for show live queries
app.use(morgan('dev'));

//This(body-parser library) used for reformat to datas 
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

/*

app.use((req,res,next)=>{
 res.header('Access-Control-Allow-Origin','*');
 res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
 if(req.method == 'OPTIONS'){
    res.header('Access-Control-Allow-Method','PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
 }
});


*/

//This for chacters, fruits etc. query
app.use('/characters', charactersRoute);
app.use('/devilFruits', devilFruitRoute);
app.use('/crews', crewsRoute);
app.use('/locations', locationsRoute);
app.use('/sublocations', sublocationsRoute);
app.use('/occupations', occupationsRoute);


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