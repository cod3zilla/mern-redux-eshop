const mongoose=require('mongoose')
const Product = require('../models/Product')
const Prodcut=require('../models/Product')

//localhost/products
exports.allProducts=async(req, res)=>{
    const _products=await Product.find({})
    .then(products=>{
        res.status(200).json(products)
    })
    .catch(err=>console.log(err))
}
//localhost/products/product:id
exports.singleProduct= async(req, res)=>{
    const product= await Product.findById({_id:req.params.id})
    .then(product=>{
        res.status(200).json(product)
    })
    .catch(error=>console.log(error))
}

exports.editProduct= async (req, res)=>{
    const {title,price,countInStock,category,description,numReveiws,rating}=req.body
    const product=await Product.findById({_id:req.params.id})
    if(product){
        product.title=title || product.title,
        product.price=price ||product.price,
        product.countInStock=countInStock || product.countInStock,
        product.category=category || product.category,
        product.description=description || product.description,
        product.numReveiws=numReveiws || product.numReveiws,
        product.rating=rating ||product.rating,
        product.updatedAt=Date.now()

    }
    const updateProduct= await product.save()
    .then(updateProduct=>{
        res.status(200).json({
            product:updateProduct,
            success:true
        })
    })
    .catch(err=>console.log(err))

}