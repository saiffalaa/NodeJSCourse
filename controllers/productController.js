const Product = require("../models/product")

exports.getAddProduct=(req,res)=>{
    res.render("addProduct",{
        pageTitle:"Add Product",
        formsCSS:true,  
    })
    // res.send("<div><h1>Hello from add product</h1><form action='/product' method='POST'><input name='title' type='text'/><button type='submit'>Add Product</button></form></div>")
}

exports.postAddProduct =(req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/")
}

exports.getProducts =  (req,res,next)=>{
    Product.fetchAll((products)=>{ res.render("shop",{
        prods:products,
        pageTitle:"shop",
        path:"/",
        hasProducts:products.length>0,
    })});
   
    // res.sendFile(path.join(__dirname,"..","views","shop.html"))
    // res.send("<h1>Hello saif albe</h1>")
}