const path = require('path');

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
// ================== ROUTES HANDLING =================
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));// STATIC FOLDER

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000);