const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();
// /admin/router => METHOD
const products = [];
router.get('/add-product',(req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('add-product.pug',{pageTitle:'Add Product',path: '/admin/add-product'});
});

router.post('/add-product', (req,res,next) =>{
    products.push({title: req.body.title})
    res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;