const express=require('express')
const path=require('path')
const cors=require('cors')
const connectDB=require('./config/dbconfig')
const productsRoute=require('./router/productRoute')
const authRoute=require('./router/authRoute')
const orderRoute=require('./router/orderRoute')

const app=express()
app.use(cors())
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
connectDB()
app.use(express.json({urlencoded:true}))
app.use(express.json())

// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('*', function (req, res) {
//  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });
//routes config
app.use('/products',productsRoute)
app.use('/users',authRoute)
app.use('/order', orderRoute)
app.get('/config/paypal',cors(), (req, res)=>{
resonse_object.header("Access-Control-Allow-Origin", "*");
resonse_object.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.send(process.env.PAYPAL_CLIENT_ID)
  
})

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname ,'/client/build')))
  app.get('*' , (req,res) =>{
    res.sendFile(path.resolve(__dirname , 'client','build','index.html'))
  })
}



const PORT=process.env.PORT||5000
app.listen(process.env.PORT,()=>console.log(`server is up on:${PORT}`))

