const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
// const expressHbs = require('express-handlebars'); //handlebars

const app = express();
// ================= Template Engine ==================
// app.engine('hbs', expressHbs()); //handlebars
// app.set('view engine','hbs');
// app.set('view engine','pug');
app.set('view engine','ejs');
app.set('views','views');  //path to folder included template

// ================== ROUTES HANDLING =================
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));// STATIC FOLDER

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);