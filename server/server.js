const express=require('express')
const cors=require('cors')
require('dotenv').config()
const connectDB=require('./config/dbconfig')
const productsRoute=require('./router/productRoute')
const authRoute=require('./router/authRoute')
const orderRoute=require('./router/orderRoute')

const app=express()
const  PORT=process.env.PORT||5000
connectDB()
//middlewares config
app.use(cors())
app.use(express.json({urlencoded:false}))
app.use(express.json())
//routes config
// app.use('/products',productsRoute)
// app.use('/users',authRoute)
// app.use('/order', orderRoute)
// app.get('/config/paypal', (req, res)=>{
//    res.send(process.env.PAYPAL_CLIENT_ID)

// })
app.get('/home', (req, res)=>{
  res.send('Hello World..!!!!')
})

if(process.env.NODE_ENV === 'production'){
   app.use(express.static(path.join(__dirname ,'/client/build')))
   app.get('*' , (req,res) =>{
     res.sendFile(path.resolve(__dirname , 'client','build','index.html'))
   })
 }else{
   app.get('/', (req, res) => {
     res.send('API is running');
   });
 }

app.listen(PORT,()=>console.log(`server is up on:${PORT}`))

