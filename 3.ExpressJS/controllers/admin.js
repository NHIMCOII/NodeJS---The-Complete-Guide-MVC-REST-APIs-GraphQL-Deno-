const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('admin/add-product',{
        pageTitle:'Add Product',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req,res,next) =>{
    // products.push({title: req.body.title}); //title in add-product.ejs's form
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    
    const product = new Product(title,imageUrl,description,price);
    product.save();
    res.redirect('/');
};

exports.getProduct = (req,res,next) => {
    const products = Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products', 
            path: '/admin/products'
        });
    });
};