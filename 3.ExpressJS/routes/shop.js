const path = require('path');

const express = require('express');

const productController = require('../controllers/products');

// const rootDir = require('../util/path.js');
// const adminData = require('./admin.js');

const router = express.Router();

router.get('/',productController.getProducts);

module.exports = router;