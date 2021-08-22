const mongoose=require('mongoose')
const Order=require('../models/Order')

exports.getMyOrders= async (req, res)=>{
const valid = mongoose.Types.ObjectId.isValid(req.user._id)
if(valid){
    const orders=await Order.find({user:req.user._id})
    .then(orders=>{
        res.json(orders)
    })    
    .catch(err=>console.log(err))
}else{
    console.log('id is not valid object')
}    
}  

    
exports.addOrder=async (req, res)=>{
    const {
        orderItems,        
        shippingAdress,
        paymentMethod,
        shippingPrice,
        taxPrice,
        totalPrice,
        itemPrice
        }=req.body
        
    
    if(orderItems&&orderItems.length===0){
        res.status(400).json({message:'Order not found!'})
        return;
    }else{
        const order= new Order({
            orderItems,
            user:req.user._id,
            shippingAdress,
            paymentMethod,
            shippingPrice,
            itemPrice,
            taxPrice,
            totalPrice
        })
        try {
        const createOrder= await order.save()
        res.status(201).json(createOrder)
        } catch (error) {
            
            console.log(error)
        }
    }
}

//get order by id
exports.getOrder=async (req, res)=>{
const order= await Order.findById(req.params.id).populate('user','name email')        
        if(order){
            res.json(order)
        }else{
            res.status(404).json({message:'Order not Found!'})
        }       
}

exports.updateOrderToPaid= async(req, res)=>{
    
    const order= await Order.findById(req.params.id)
    if(order){
        order.isPaid=true,
        order.paidAt=Date.now(),
        order.paymentResult={
            id:req.body.id,
            status:req.body.status,
            update_time:req.body.update_time,
            payer:req.body.email_adress
        }
        const updateOrder= await order.save()
        .then(updateOrder=>{
            res.json(updateOrder)
        })
        .catch(err=>console.log(err))
        
    }else{
        res.status(404).json({message:'order not found!'})
    }
}

