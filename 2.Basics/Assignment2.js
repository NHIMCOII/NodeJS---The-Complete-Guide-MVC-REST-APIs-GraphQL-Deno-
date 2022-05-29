/* INITIALIZE A NEW PROJECT
npm init
"start": "node app.js" script in .json file
npm install nodemon --save-dev
( npm install for latest version )
========Auto-restart===========
change scripi in .json "start": "node"->"nodemon"
========Install Express========
npm install --save express
npm install --save body-parser
*/

const express = require('express');

const app = express();

app.use('/users',(req,res,next) => {
    console.log('/users middleware');
    res.send('<p>The middleware that handle just /users<p>');
});

app.use('/',(req,res,next) => {
    console.log('/ middleware');
    res.send('<p>The middleware that handle just /</p>');
});



app.listen(3000);