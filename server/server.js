const express=require('express')
const cors=require('cors')
if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }
const connectDB=require('./config/dbconfig')
const productsRoute=require('./router/productRoute')
const authRoute=require('./router/authRoute')
const orderRoute=require('./router/orderRoute')

const app=express()

connectDB()
//middlewares config
app.use(cors())
app.use(express.json({urlencoded:true}))
app.use(express.json())
//routes config
app.use('/products',productsRoute)
app.use('/users',authRoute)
app.use('/order', orderRoute)
app.get('/config/paypal', (req, res)=>{
   res.send(process.env.PAYPAL_CLIENT_ID)

})
app.get('/home', (req, res)=>{
  res.send('Hello World..!!!!')
})


const PORT=process.env.PORT
app.listen(process.env.PORT||5000,()=>console.log(`server is up on:${PORT}`))

