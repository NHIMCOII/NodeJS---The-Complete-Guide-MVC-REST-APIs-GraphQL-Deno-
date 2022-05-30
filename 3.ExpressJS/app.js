const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','pug');
app.set('views','views');  //path to folder included template

// ================== ROUTES HANDLING =================
const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));// STATIC FOLDER

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req,res,next) => {
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    res.render('404.pug',{pageTitle: 'Page Not Found'});
});

app.listen(3000);