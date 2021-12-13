var express = require('express');
const path = require('path');
var app = express();
const product = []; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src')));

app.post('/', (req, res) =>{
  
    console.log(JSON.stringify(req.body));
    res.statusCode(200);
  
});

app.get('/', (req, res) =>{
    res.send(" ");
});


app.listen(3000);
console.log(`Running server at http://127.0.0.0:3000`);