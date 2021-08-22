const express=require('express')
const router=express.Router()

const {getMyOrders,addOrder, getOrder, updateOrderToPaid }=require('../controllers/orderController')
const {protectRoute}=require('../middlewares/authHandler')

router.route('/userorder').get(protectRoute,getMyOrders)
// place order
router.route('/').post(protectRoute,addOrder)

// get order by id
router.route('/:id').get(protectRoute, getOrder)
// order update to payment
router.route('/payment/:id/pay').put(protectRoute, updateOrderToPaid)



module.exports=router;