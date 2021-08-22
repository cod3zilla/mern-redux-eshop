const express=require('express')
const router=express.Router()
const {allProducts,singleProduct}=require('../controllers/productController')

router.get('/',allProducts)
router.get('/product/:id',singleProduct)

module.exports=router;