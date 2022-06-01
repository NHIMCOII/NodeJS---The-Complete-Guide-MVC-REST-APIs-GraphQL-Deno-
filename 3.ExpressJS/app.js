const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars'); //handlebars

const app = express();

// app.engine('hbs', expressHbs()); //handlebars
// app.set('view engine','hbs');
// app.set('view engine','pug');
app.set('view engine','ejs');
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
    res.render('404',{pageTitle: 'Page Not Found'});
});

app.listen(3000);