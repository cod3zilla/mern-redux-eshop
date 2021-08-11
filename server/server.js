const express=require('express')
const path=require('path')
const connectDB=require('./config/dbconfig')

const app=express()
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
connectDB()

app.get('/', (req, res)=>{
  res.send(process.env.DATA)
})


const PORT=process.env.PORT||5000
app.listen(process.env.PORT,()=>console.log(`server is up on:${PORT}`))

