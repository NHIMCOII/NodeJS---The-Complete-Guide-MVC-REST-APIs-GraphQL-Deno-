const path = require('path');

const express = require('express');

// const rootDir = require('../util/path.js');

const productController = require('../controllers/products');

const router = express.Router();
// /admin/router => METHOD

router.get('/add-product', productController.getAddProduct);

router.post('/add-product', productController.postAddProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;