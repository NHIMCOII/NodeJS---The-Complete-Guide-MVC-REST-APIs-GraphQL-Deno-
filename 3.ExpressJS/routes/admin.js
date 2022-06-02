const path = require('path');

const express = require('express');

// const rootDir = require('../util/path.js');

const adminController = require('../controllers/admin');

const router = express.Router();
// /admin/router => METHOD

router.get('/add-product', adminController.getAddProduct);

router.get("/products",adminController.getProduct);

router.post('/add-product', adminController.postAddProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;