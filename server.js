const express = require('express');
const app = express();

app.get('/', (req, res) =>{

    res.send('Hello World!');
    p = 777;
    console.log(p);

});

app.get('/about', (req, res) => {

    res.send('About');

});

app.get('/teste', (req, res) => {
    console.log(req.params);
    res.send(req.params);
});

app.get('/contact', (req, res) => {

    res.send('Contact <h1>Charldses</h1>');

});


app.listen(7777);