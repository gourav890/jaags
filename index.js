const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
mongoose.Promise = global.Promise;

mongoose.connect(config.uri, (err)=>{
    if(err){ 
        console.log('connection failed', err);
}  else{
    console.log('connected' + config.db);
} 
});

app.use(express.static(__dirname + '/client/dist/'));


app.get('*', (req, res)=>{
    res.sendFIle(path.join(__dirname + '/client/dist/index.html'));
  });
  
app.listen(8080,()=>{
    console.log('Listing on port 8080')
});