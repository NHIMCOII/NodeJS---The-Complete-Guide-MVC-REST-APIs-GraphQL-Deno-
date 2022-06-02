const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

// const rootDir = require('../util/path.js');
// const adminData = require('./admin.js');

const router = express.Router();

router.get('/',shopController.getIndex); //get from web

router.get('/products',shopController.getProducts);

router.get('/cart',shopController.getCart);

router.get('/orders',shopController.getOrders);

router.get('/checkout',shopController.getCheckout);


module.exports = router;