require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');
const mongoose = require('mongoose');
const { apply } = require('core-js/library/es6/reflect');
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  app.emit('ok');
}).catch(e => console.error(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

const sessionOptions = session({
  secret: 'jooj',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.use(sessionOptions);
app.use(flash());

app.on('ok', () => {
  
app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
});


