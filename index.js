const express=require('express');
const morgan=require('morgan');
const moviesRouter=require('./MoviesRouter');
let app=express();
//create server in express js
const logger=function(req,res,next){
    console.log('middleWare Called'); 
    next();
};
app.use(express.json());
app.use(morgan('dev'));
app.use(logger);

  // res.status(200).send("created"));
app.use("/movies",moviesRouter)

module.exports= app;