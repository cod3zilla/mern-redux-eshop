const express=require('express')
const router=express.Router()
const {allProducts,singleProduct,editProduct}=require('../controllers/productController')

router.get('/',allProducts)
router.route('/product/:id').get(singleProduct).put(editProduct)

module.exports=router;