// const products = [];

const fs  = require("fs");
const pa = require("../util/path")
const path = require ("path");

const p = path.join(pa,"data","products.json");
const getAllProd = (cb)=>{
    
    fs.readFile(p,(err,content)=>{
        if(err)cb([])
        else{
            cb(JSON.parse(content));
        }
    })
}
module.exports = class Product {
    constructor(title){
        this.title = title
    }

    save(){
       getAllProd((products)=>{
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err)
       })
        })
}

    static fetchAll(cb){
        getAllProd(cb);
    } 
}