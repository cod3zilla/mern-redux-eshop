const express=require('express')
const dotenv=require('dotenv')

const app=express()
if(process.env.NODE_ENV !== 'production'){
  dotenv.config()
}


app.get('/', (req, res)=>{
  res.send(process.env.DATA)
})


const PORT=process.env.PORT||5000
app.listen(process.env.PORT,()=>console.log(`server is up on:${PORT}`))

