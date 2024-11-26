const express = require('express');
const app = express();
app.use(express.json());
const Usegr=require('./NewConnect.js');
const server=require('./new.js')
const Router =require('./Router.js')
// console.log(app.get('env'));
app.use("/mondy",Router)
app.listen(process.env.PORT || 8000,()=>{console.log('Server started...');});