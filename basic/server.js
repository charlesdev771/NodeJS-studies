const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
app.use(express.urlencoded({ extended: true}));
app.use(routes)

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(routes)
app.use(express.static(path.resolve(__dirname, 'public')));
app.get('/', (req, res) =>{

    res.send('Hello World!');
    p = 777;
    console.log(p);

    res.render('index');

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