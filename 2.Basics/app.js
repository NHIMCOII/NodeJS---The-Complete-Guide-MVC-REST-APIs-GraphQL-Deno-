const express = require('express');

const app = express();

app.use('/',(req, res, next) => {
    console.log('This always run');
    next();
});

app.use('/add-product',(req, res, next) => {
    console.log('In another the middleware');
    res.send('<h1>add product page</h1>');
});

app.use('/',(req, res, next) => {
    console.log('In another the middleware');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);